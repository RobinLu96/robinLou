import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTypingComponent } from './dynamic-typing.component';

describe('DynamicTypingComponent', () => {
  let component: DynamicTypingComponent;
  let fixture: ComponentFixture<DynamicTypingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTypingComponent]
    });
    fixture = TestBed.createComponent(DynamicTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
