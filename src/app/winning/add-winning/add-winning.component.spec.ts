import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWinningComponent } from './add-winning.component';

describe('AddWinningComponent', () => {
  let component: AddWinningComponent;
  let fixture: ComponentFixture<AddWinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
