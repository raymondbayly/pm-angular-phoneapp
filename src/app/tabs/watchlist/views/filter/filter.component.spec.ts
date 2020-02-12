import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListFilterPageComponent } from './filter.component';

describe('WatchListFilterPageComponent', () => {
  let component: WatchListFilterPageComponent;
  let fixture: ComponentFixture<WatchListFilterPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
