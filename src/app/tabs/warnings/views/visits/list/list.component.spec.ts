import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningListPageComponent } from './list.component';

describe('WarningListPageComponent', () => {
  let component: WarningListPageComponent;
  let fixture: ComponentFixture<WarningListPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
