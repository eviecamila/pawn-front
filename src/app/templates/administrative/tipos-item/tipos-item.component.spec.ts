import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposItemComponent } from './tipos-item.component';

describe('TiposItemComponent', () => {
  let component: TiposItemComponent;
  let fixture: ComponentFixture<TiposItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
