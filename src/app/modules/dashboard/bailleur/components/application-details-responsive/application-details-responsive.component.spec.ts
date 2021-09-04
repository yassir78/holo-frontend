import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsResponsiveComponent } from './application-details-responsive.component';

describe('ApplicationDetailsResponsiveComponent', () => {
  let component: ApplicationDetailsResponsiveComponent;
  let fixture: ComponentFixture<ApplicationDetailsResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailsResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
