import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarJefeMantenimientoComponent } from './validar-jefe-mantenimiento.component';

describe('ValidarJefeMantenimientoComponent', () => {
  let component: ValidarJefeMantenimientoComponent;
  let fixture: ComponentFixture<ValidarJefeMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarJefeMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarJefeMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
