import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PataComponent } from './pata.component';

describe('PataComponent', () => {
  let component: PataComponent;
  let fixture: ComponentFixture<PataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
