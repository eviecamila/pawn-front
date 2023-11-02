import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusablecardComponent } from './focusablecard.component';

describe('FocusablecardComponent', () => {
  let component: FocusablecardComponent;
  let fixture: ComponentFixture<FocusablecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusablecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusablecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
