import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMetalesPage } from './agregar-metales.page';

describe('AgregarMetalesPage', () => {
  let component: AgregarMetalesPage;
  let fixture: ComponentFixture<AgregarMetalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMetalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMetalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
