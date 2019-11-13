import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaValidacionComponent } from './segunda-validacion.component';

describe('SegundaValidacionComponent', () => {
  let component: SegundaValidacionComponent;
  let fixture: ComponentFixture<SegundaValidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaValidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
