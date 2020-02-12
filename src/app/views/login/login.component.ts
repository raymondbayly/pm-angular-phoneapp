import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Platform, ToastController} from '@ionic/angular';
import {LoginComponent, LoginIpService, LoginService} from 'ng-login-library';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginPageComponent extends LoginComponent {
  errorMessage: any = '';

  @ViewChild('input') userNameField;

    constructor(public loginService: LoginService,
                public loginIpService: LoginIpService,
                private toastCtrl: ToastController,
                public platform: Platform) {
        super(loginService, loginIpService);
    }
    private backButtonSubscription: Subscription;

    ionViewWillEnter() {
        this.errorMessage = null;
        setTimeout(() => {
            this.userNameField.setFocus();
        }, 150);
        this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            // Ignored - prevents going back to the login screen
        });
    }

    ionViewWillLeave() {
        if (this.backButtonSubscription && !this.backButtonSubscription.closed) {
            this.backButtonSubscription.unsubscribe();
        }
    }

    loginErrored() {
        setTimeout(() => {
            this.userNameField.setFocus();
        }, 150);
    }

    async presentToast() {
        const toast = await this.toastCtrl.create({
            message: this.errorMessage,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }
}
