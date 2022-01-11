import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingCentersComponent } from './betting-centers.component';

describe('BettingCentersComponent', () => {
  let component: BettingCentersComponent;
  let fixture: ComponentFixture<BettingCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
