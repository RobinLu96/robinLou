import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDetailsComponent } from './life-details.component';

describe('LifeDetailsComponent', () => {
  let component: LifeDetailsComponent;
  let fixture: ComponentFixture<LifeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeDetailsComponent]
    });
    fixture = TestBed.createComponent(LifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
