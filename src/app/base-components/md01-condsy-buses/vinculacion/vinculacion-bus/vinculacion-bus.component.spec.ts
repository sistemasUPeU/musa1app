import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionBusComponent } from './vinculacion-bus.component';

describe('VinculacionBusComponent', () => {
  let component: VinculacionBusComponent;
  let fixture: ComponentFixture<VinculacionBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
