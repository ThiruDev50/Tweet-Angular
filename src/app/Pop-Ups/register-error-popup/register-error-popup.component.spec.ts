import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterErrorPopupComponent } from './register-error-popup.component';

describe('RegisterErrorPopupComponent', () => {
  let component: RegisterErrorPopupComponent;
  let fixture: ComponentFixture<RegisterErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterErrorPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
