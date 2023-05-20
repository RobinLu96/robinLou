import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinIconComponent } from './robin-icon.component';

describe('RobinIconComponent', () => {
  let component: RobinIconComponent;
  let fixture: ComponentFixture<RobinIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobinIconComponent]
    });
    fixture = TestBed.createComponent(RobinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
