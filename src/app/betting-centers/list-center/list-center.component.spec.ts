import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCenterComponent } from './list-center.component';

describe('ListCenterComponent', () => {
  let component: ListCenterComponent;
  let fixture: ComponentFixture<ListCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
