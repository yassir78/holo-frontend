import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireHomeComponent } from './locataire-home.component';

describe('LocataireHomeComponent', () => {
  let component: LocataireHomeComponent;
  let fixture: ComponentFixture<LocataireHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocataireHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
