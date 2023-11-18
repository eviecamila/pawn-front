import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrefItemCardComponent } from './href-item-card.component';

describe('HrefItemCardComponent', () => {
  let component: HrefItemCardComponent;
  let fixture: ComponentFixture<HrefItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrefItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrefItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
