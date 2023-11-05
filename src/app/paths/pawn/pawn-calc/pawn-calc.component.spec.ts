import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnCalcComponent } from './pawn-calc.component';

describe('PawnCalcComponent', () => {
  let component: PawnCalcComponent;
  let fixture: ComponentFixture<PawnCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawnCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
