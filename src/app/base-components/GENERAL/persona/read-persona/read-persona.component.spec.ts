import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPersonaComponent } from './read-persona.component';

describe('ReadPersonaComponent', () => {
  let component: ReadPersonaComponent;
  let fixture: ComponentFixture<ReadPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
