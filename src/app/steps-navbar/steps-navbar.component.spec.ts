import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsNavbarComponent } from './steps-navbar.component';

describe('StepsNavbarComponent', () => {
  let component: StepsNavbarComponent;
  let fixture: ComponentFixture<StepsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsNavbarComponent]
    });
    fixture = TestBed.createComponent(StepsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
