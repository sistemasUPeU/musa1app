import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoaTarjeCirComponent } from './soa-tarje-cir.component';

describe('SoaTarjeCirComponent', () => {
  let component: SoaTarjeCirComponent;
  let fixture: ComponentFixture<SoaTarjeCirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoaTarjeCirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoaTarjeCirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
