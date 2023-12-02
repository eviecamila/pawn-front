import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingQuotationsComponent } from './quotations.component';

describe('PendingQuotationsComponent', () => {
  let component: PendingQuotationsComponent;
  let fixture: ComponentFixture<PendingQuotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingQuotationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
