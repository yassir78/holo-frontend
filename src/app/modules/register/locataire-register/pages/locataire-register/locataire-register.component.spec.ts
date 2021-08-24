import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireRegisterComponent } from './locataire-register.component';

describe('LocataireRegisterComponent', () => {
  let component: LocataireRegisterComponent;
  let fixture: ComponentFixture<LocataireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocataireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
