import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistProfileSettingsPageComponent } from './profile.component';

describe('WatchlistProfileSettingsPageComponent', () => {
  let component: WatchlistProfileSettingsPageComponent;
  let fixture: ComponentFixture<WatchlistProfileSettingsPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistProfileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
