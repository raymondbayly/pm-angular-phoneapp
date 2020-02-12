import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningProfileSettingsPageComponent } from './profile.component';

describe('WarningProfileSettingsPageComponent', () => {
  let component: WarningProfileSettingsPageComponent;
  let fixture: ComponentFixture<WarningProfileSettingsPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningProfileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
