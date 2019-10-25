import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoReciclajePage } from './grafico-reciclaje.page';

describe('GraficoReciclajePage', () => {
  let component: GraficoReciclajePage;
  let fixture: ComponentFixture<GraficoReciclajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoReciclajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoReciclajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
