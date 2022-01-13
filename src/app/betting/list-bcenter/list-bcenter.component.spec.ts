import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBcenterComponent } from './list-bcenter.component';

describe('ListBcenterComponent', () => {
  let component: ListBcenterComponent;
  let fixture: ComponentFixture<ListBcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
