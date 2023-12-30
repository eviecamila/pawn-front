import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectItemComponent } from './reject-item.component';

describe('RejectItemComponent', () => {
  let component: RejectItemComponent;
  let fixture: ComponentFixture<RejectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
