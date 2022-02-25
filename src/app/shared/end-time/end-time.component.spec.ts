import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTimeComponent } from './end-time.component';

describe('EndTimeComponent', () => {
  let component: EndTimeComponent;
  let fixture: ComponentFixture<EndTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
