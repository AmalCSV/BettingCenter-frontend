import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingLoaderComponent } from './betting-loader.component';

describe('BettingLoaderComponent', () => {
  let component: BettingLoaderComponent;
  let fixture: ComponentFixture<BettingLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
