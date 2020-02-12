import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSearchPageComponent } from './search.component';

describe('PatientsSearchPageComponent', () => {
  let component: PatientsSearchPageComponent;
  let fixture: ComponentFixture<PatientsSearchPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
