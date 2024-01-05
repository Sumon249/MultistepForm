import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingUpComponent } from './finishing-up.component';

describe('FinishingUpComponent', () => {
  let component: FinishingUpComponent;
  let fixture: ComponentFixture<FinishingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishingUpComponent]
    });
    fixture = TestBed.createComponent(FinishingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
