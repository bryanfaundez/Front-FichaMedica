import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInterconsultaPage } from './lista-interconsulta.page';

describe('ListaInterconsultaPage', () => {
  let component: ListaInterconsultaPage;
  let fixture: ComponentFixture<ListaInterconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInterconsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInterconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
