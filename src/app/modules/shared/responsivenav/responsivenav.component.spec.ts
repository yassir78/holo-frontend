import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenavComponent } from './responsivenav.component';

describe('ResponsivenavComponent', () => {
  let component: ResponsivenavComponent;
  let fixture: ComponentFixture<ResponsivenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
