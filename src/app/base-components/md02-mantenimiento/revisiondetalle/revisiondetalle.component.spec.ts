import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisiondetalleComponent } from './revisiondetalle.component';

describe('RevisiondetalleComponent', () => {
  let component: RevisiondetalleComponent;
  let fixture: ComponentFixture<RevisiondetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisiondetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisiondetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
