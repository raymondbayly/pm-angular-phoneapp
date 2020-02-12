import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientItemInfoComponent } from './info.component';

describe('PatientItemInfoComponent', () => {
  let component: PatientItemInfoComponent;
  let fixture: ComponentFixture<PatientItemInfoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
