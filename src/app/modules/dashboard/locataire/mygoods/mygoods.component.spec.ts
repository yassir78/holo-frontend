import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygoodsComponent } from './mygoods.component';

describe('MygoodsComponent', () => {
  let component: MygoodsComponent;
  let fixture: ComponentFixture<MygoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
