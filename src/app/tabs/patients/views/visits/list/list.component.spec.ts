import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListPageComponent } from './list.component';

describe('PatientListPageComponent', () => {
  let component: PatientListPageComponent;
  let fixture: ComponentFixture<PatientListPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
