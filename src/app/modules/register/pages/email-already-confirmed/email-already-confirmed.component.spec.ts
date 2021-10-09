import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAlreadyConfirmedComponent } from './email-already-confirmed.component';

describe('EmailAlreadyConfirmedComponent', () => {
  let component: EmailAlreadyConfirmedComponent;
  let fixture: ComponentFixture<EmailAlreadyConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAlreadyConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAlreadyConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
