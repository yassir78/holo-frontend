import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailleurRegisterComponent } from './bailleur-register.component';

describe('BailleurRegisterComponent', () => {
  let component: BailleurRegisterComponent;
  let fixture: ComponentFixture<BailleurRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailleurRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailleurRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
