import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemetteurComponent } from './remetteur.component';

describe('RemetteurComponent', () => {
  let component: RemetteurComponent;
  let fixture: ComponentFixture<RemetteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemetteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemetteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
