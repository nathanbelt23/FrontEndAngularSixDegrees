import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActorDirectorComponent } from './edit-actor-director.component';

describe('EditActorDirectorComponent', () => {
  let component: EditActorDirectorComponent;
  let fixture: ComponentFixture<EditActorDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditActorDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActorDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
