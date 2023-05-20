import { Component, OnInit, Input } from '@angular/core';
import { robinSkill } from '../util/interface/robinSkill';

import { robinInterest } from '../util/interface/robinInterest';
import { SkillsService } from '../service/skills.service';
import { InterestService } from '../service/interest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro-skill-interest',
  templateUrl: './intro-skill-interest.component.html',
  styleUrls: ['./intro-skill-interest.component.scss']
})
export class IntroSkillInterestComponent {

  skills: robinSkill[];
  interest: robinInterest[];
  url: string; 

  constructor(
    private skillsService: SkillsService,
    private interestService: InterestService,
    private router: Router
  ) { }

  ngOnInit() {
    //After the Contructor and ngOnChanges
    this.skills = this.skillsService.getSkills();
    this.interest = this.interestService.getInterest();
    this.url = './assets/icon/logo/logo.jpg';
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}