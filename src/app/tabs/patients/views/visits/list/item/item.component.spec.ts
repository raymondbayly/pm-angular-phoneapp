import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientItemComponent } from './item.component';

describe('PatientItemComponent', () => {
  let component: PatientItemComponent;
  let fixture: ComponentFixture<PatientItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
