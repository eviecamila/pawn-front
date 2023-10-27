import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDarkModeComponent } from './switch-dark-mode.component';

describe('SwitchDarkModeComponent', () => {
  let component: SwitchDarkModeComponent;
  let fixture: ComponentFixture<SwitchDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDarkModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
