import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInterconsultaPage } from './editar-interconsulta.page';

describe('EditarInterconsultaPage', () => {
  let component: EditarInterconsultaPage;
  let fixture: ComponentFixture<EditarInterconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInterconsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInterconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
