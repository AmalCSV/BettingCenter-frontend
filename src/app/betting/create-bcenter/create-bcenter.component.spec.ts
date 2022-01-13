import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBcenterComponent } from './create-bcenter.component';

describe('CreateBcenterComponent', () => {
  let component: CreateBcenterComponent;
  let fixture: ComponentFixture<CreateBcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
