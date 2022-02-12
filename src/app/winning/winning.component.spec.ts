import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningComponent } from './winning.component';

describe('WinningComponent', () => {
  let component: WinningComponent;
  let fixture: ComponentFixture<WinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
