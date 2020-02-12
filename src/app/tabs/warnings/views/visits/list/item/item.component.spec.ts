import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningItemComponent } from './item.component';

describe('WarningItemComponent', () => {
  let component: WarningItemComponent;
  let fixture: ComponentFixture<WarningItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
