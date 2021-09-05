import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStepComponent } from './horizontal-step.component';

describe('HorizontalStepComponent', () => {
  let component: HorizontalStepComponent;
  let fixture: ComponentFixture<HorizontalStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
