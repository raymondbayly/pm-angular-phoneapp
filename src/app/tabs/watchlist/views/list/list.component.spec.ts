import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListPageComponent } from './list.component';

describe('PatientListPageComponent', () => {
  let component: WatchListPageComponent;
  let fixture: ComponentFixture<WatchListPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
