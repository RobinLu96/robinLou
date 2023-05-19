import { Injectable } from "@angular/core";
import { robinSkill } from "../util/interface/robinSkill";
import { SKILLS_DATA } from "../util/skills.data";

@Injectable({
    providedIn: 'root'
  })
  export class SkillsService {
  
    constructor() { }
  
    getSkills(): robinSkill[] {
      return SKILLS_DATA;
    }
}