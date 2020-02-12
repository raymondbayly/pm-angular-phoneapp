import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsFilterPageComponent } from './filter.component';

describe('WarningsFilterPageComponent', () => {
  let component: WarningsFilterPageComponent;
  let fixture: ComponentFixture<WarningsFilterPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
