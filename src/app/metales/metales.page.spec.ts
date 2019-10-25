import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalesPage } from './metales.page';

describe('MetalesPage', () => {
  let component: MetalesPage;
  let fixture: ComponentFixture<MetalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
