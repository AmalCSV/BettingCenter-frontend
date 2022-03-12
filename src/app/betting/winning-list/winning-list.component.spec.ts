import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningListComponent } from './winning-list.component';

describe('WinningListComponent', () => {
  let component: WinningListComponent;
  let fixture: ComponentFixture<WinningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
