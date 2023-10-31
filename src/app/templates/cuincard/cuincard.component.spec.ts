import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuincardComponent } from './cuincard.component';

describe('CuincardComponent', () => {
  let component: CuincardComponent;
  let fixture: ComponentFixture<CuincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuincardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
