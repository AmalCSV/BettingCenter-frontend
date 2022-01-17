import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBetComponent } from './list-bet.component';

describe('ListBetComponent', () => {
  let component: ListBetComponent;
  let fixture: ComponentFixture<ListBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
