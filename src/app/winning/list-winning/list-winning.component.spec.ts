import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWinningComponent } from './list-winning.component';

describe('ListWinningComponent', () => {
  let component: ListWinningComponent;
  let fixture: ComponentFixture<ListWinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
