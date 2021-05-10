import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDirectorComponent } from './actor-director.component';

describe('ActorDirectorComponent', () => {
  let component: ActorDirectorComponent;
  let fixture: ComponentFixture<ActorDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
