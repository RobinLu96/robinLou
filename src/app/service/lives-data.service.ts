import { Injectable } from '@angular/core';
import { robinLifeExperience } from '../util/interface/robinLifeExperience';
import { ALL_LIFE_DATA } from '../util/life.data';

@Injectable()
export class LivesDataService {

  constructor() {}

  getLives(): robinLifeExperience[] {
    console.log(ALL_LIFE_DATA);
    return ALL_LIFE_DATA;
  }
}
