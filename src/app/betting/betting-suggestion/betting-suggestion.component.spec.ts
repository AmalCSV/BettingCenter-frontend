import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingSuggestionComponent } from './betting-suggestion.component';

describe('BettingSuggestionComponent', () => {
  let component: BettingSuggestionComponent;
  let fixture: ComponentFixture<BettingSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
