import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeraGraph} from 'ng-common-library';
import { ArrayViewService } from 'ng-array-view-library';
import {
  PeragraphApiService
} from 'ng-common-library';

@Component({
  selector: 'app-visit-display-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class PatientListPageComponent  implements OnInit, OnDestroy {
  public peraGraphs: Array<PeraGraph>;
  private graphSubscription;
  private completedRefreshSubscription;

    constructor(public peragraphApiService: PeragraphApiService, public arrayViewService: ArrayViewService) {
    }

    ngOnInit() {
        // TODO: Implement map and tap to support filters in MOBILE-178 and MOBILE-201
        // Subscribe to the BehaviorSubject to receive graph updates on an interval
        this.graphSubscription = this.peragraphApiService.getPeraGraphSubject().pipe().subscribe(graphs => {
            if (graphs && graphs.length > 0) {
                if (this.peraGraphs && this.peraGraphs.length > 0) {
                    // console.log('Updating graphs');
                    this.addOrUpdateGraphs(graphs);
                    this.removeDischargedGraphs(graphs);
                } else {
                    this.peraGraphs = graphs;
                    // console.log('Got initial graphs. Size = ' + this.peraGraphs.length);
                }
            }
        });
    }

    private addOrUpdateGraphs(graphs) {
        for (const graph of graphs) {
            let found = false;
            for (const curGraph of this.peraGraphs) {
                if (curGraph.visitId === graph.visitId) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // console.log('Adding new graph [' + JSON.stringify(graph) + ']');
                // Add the graph to the current list
                this.peraGraphs.push(graph);
            }
        }
    }

    private removeDischargedGraphs(graphs) {
        let i = this.peraGraphs.length;
        while (i--) {
            let found = false;
            for (const graph of graphs) {
                if (this.peraGraphs[i].visitId === graph.visitId) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.peraGraphs.splice(i, 1);
            }
        }
    }

    doRefresh(event) {
        // TODO: When the ng-arrayview library is fixed we can remove passing true with the method
        this.completedRefreshSubscription = this.arrayViewService.completedRefresh$.subscribe(() => {
            event.target.complete();
        });
        this.arrayViewService.refreshGraphs(true);
      }

    ngOnDestroy(): void {
        if (this.graphSubscription) {
            this.graphSubscription.unsubscribe();
            this.completedRefreshSubscription.unsubscribe();
        }
    }
}

