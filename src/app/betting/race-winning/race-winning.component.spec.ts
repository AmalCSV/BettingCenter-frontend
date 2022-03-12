import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceWinningComponent } from './race-winning.component';

describe('RaceWinningComponent', () => {
  let component: RaceWinningComponent;
  let fixture: ComponentFixture<RaceWinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceWinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
