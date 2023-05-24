import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesComponent } from './lives.component';

describe('LivesComponent', () => {
  let component: LivesComponent;
  let fixture: ComponentFixture<LivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivesComponent]
    });
    fixture = TestBed.createComponent(LivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
