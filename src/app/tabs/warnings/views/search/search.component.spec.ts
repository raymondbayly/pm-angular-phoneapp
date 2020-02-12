import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSearchPageComponent } from './search.component';

describe('WarningSearchPageComponent', () => {
  let component: WarningSearchPageComponent;
  let fixture: ComponentFixture<WarningSearchPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
