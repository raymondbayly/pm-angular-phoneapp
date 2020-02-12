import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileSettingsPageComponent } from './profile.component';

describe('PatientProfileSettingsPageComponent', () => {
  let component: PatientProfileSettingsPageComponent;
  let fixture: ComponentFixture<PatientProfileSettingsPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
