import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningItemInfoComponent } from './info.component';

describe('WarningItemInfoComponent', () => {
  let component: WarningItemInfoComponent;
  let fixture: ComponentFixture<WarningItemInfoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
