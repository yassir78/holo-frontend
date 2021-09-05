import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoodHomeComponent } from './add-good-home.component';

describe('AddGoodHomeComponent', () => {
  let component: AddGoodHomeComponent;
  let fixture: ComponentFixture<AddGoodHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGoodHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
