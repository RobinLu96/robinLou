import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIndexComponent } from './back-index.component';

describe('BackIndexComponent', () => {
  let component: BackIndexComponent;
  let fixture: ComponentFixture<BackIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackIndexComponent]
    });
    fixture = TestBed.createComponent(BackIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
