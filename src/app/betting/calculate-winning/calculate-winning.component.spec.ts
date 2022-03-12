import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateWinningComponent } from './calculate-winning.component';

describe('CalculateWinningComponent', () => {
  let component: CalculateWinningComponent;
  let fixture: ComponentFixture<CalculateWinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateWinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
