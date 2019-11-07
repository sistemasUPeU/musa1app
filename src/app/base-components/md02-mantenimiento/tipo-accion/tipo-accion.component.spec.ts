import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAccionComponent } from './tipo-accion.component';

describe('TipoAccionComponent', () => {
  let component: TipoAccionComponent;
  let fixture: ComponentFixture<TipoAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
