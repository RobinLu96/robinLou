import { Injectable } from '@angular/core';
import { robinExperience } from '../util/interface/robinExperience';
import { ALL_PROJECT_DATA } from '../util/job.data';

@Injectable()
export class JobsDataService {

  constructor() {}

  getJobs(): robinExperience[] {
    console.log(ALL_PROJECT_DATA);
    return ALL_PROJECT_DATA;
  }
}

