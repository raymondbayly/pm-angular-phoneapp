import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFilterPageComponent } from './filter.component';

describe('PatientsFilterPageComponent', () => {
  let component: PatientsFilterPageComponent;
  let fixture: ComponentFixture<PatientsFilterPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
