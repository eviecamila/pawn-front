import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleMenuComponent } from './collapsible-menu.component';

describe('CollapsibleMenuComponent', () => {
  let component: CollapsibleMenuComponent;
  let fixture: ComponentFixture<CollapsibleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsibleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
