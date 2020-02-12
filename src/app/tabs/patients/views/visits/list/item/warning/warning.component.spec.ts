import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientItemWarningComponent } from './warning.component';

describe('PatientItemWarningComponent', () => {
  let component: PatientItemWarningComponent;
  let fixture: ComponentFixture<PatientItemWarningComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientItemWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
