import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroMapaComponent } from './primeiro-mapa.component';

describe('PrimeiroMapaComponent', () => {
  let component: PrimeiroMapaComponent;
  let fixture: ComponentFixture<PrimeiroMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
