import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarPedidoComponent } from './autorizar-pedido.component';

describe('AutorizarPedidoComponent', () => {
  let component: AutorizarPedidoComponent;
  let fixture: ComponentFixture<AutorizarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
