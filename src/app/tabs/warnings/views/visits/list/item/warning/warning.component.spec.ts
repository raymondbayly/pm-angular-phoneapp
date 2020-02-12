import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningItemWarningComponent } from './warning.component';

describe('WarningItemWarningComponent', () => {
  let component: WarningItemWarningComponent;
  let fixture: ComponentFixture<WarningItemWarningComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningItemWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
