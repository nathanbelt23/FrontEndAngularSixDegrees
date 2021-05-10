import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirPeliculaComponent } from './recibir-pelicula.component';

describe('RecibirPeliculaComponent', () => {
  let component: RecibirPeliculaComponent;
  let fixture: ComponentFixture<RecibirPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibirPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
