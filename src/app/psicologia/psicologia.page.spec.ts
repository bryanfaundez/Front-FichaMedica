import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaPage } from './psicologia.page';

describe('PsicologiaPage', () => {
  let component: PsicologiaPage;
  let fixture: ComponentFixture<PsicologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicologiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
