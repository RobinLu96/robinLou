import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSkillInterestComponent } from './intro-skill-interest.component';

describe('IntroSkillInterestComponent', () => {
  let component: IntroSkillInterestComponent;
  let fixture: ComponentFixture<IntroSkillInterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroSkillInterestComponent]
    });
    fixture = TestBed.createComponent(IntroSkillInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
