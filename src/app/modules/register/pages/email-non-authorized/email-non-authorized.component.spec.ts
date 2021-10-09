import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNonAuthorizedComponent } from './email-non-authorized.component';

describe('EmailNonAuthorizedComponent', () => {
  let component: EmailNonAuthorizedComponent;
  let fixture: ComponentFixture<EmailNonAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailNonAuthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNonAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
