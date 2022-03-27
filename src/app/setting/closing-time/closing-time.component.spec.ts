import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingTimeComponent } from './closing-time.component';

describe('ClosingTimeComponent', () => {
  let component: ClosingTimeComponent;
  let fixture: ComponentFixture<ClosingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
