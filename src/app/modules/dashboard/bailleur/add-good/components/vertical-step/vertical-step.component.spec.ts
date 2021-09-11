import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalStepComponent } from './vertical-step.component';

describe('VerticalStepComponent', () => {
  let component: VerticalStepComponent;
  let fixture: ComponentFixture<VerticalStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
