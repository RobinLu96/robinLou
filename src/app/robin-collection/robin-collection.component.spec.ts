import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinCollectionComponent } from './robin-collection.component';

describe('RobinCollectionComponent', () => {
  let component: RobinCollectionComponent;
  let fixture: ComponentFixture<RobinCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobinCollectionComponent]
    });
    fixture = TestBed.createComponent(RobinCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
