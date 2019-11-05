import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionConductorComponent } from './vinculacion-conductor.component';

describe('VinculacionConductorComponent', () => {
  let component: VinculacionConductorComponent;
  let fixture: ComponentFixture<VinculacionConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
