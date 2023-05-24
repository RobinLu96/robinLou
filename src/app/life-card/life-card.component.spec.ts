import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCardComponent } from './life-card.component';

describe('LifeCardComponent', () => {
  let component: LifeCardComponent;
  let fixture: ComponentFixture<LifeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCardComponent]
    });
    fixture = TestBed.createComponent(LifeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
