import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { JobsDataService } from '../service/jobs-data.service';
import { robinExperience } from '../util/interface/robinExperience';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent {
  public myData: any = "";
  public detailedJob: robinExperience;
  public jobId;

  constructor(
    public dynamicRoute: ActivatedRoute,
    private staticRoute: Router,
    private jobService: JobsDataService
  ){}

  ngOnInit(){
    this.jobId = this.dynamicRoute.snapshot.paramMap.get('id');
    this.detailedJob = this.jobService.getJobs().find(x => x.id == this.jobId);
  }

  onBackClick(){
    this.staticRoute.navigateByUrl('/experience');
  }

}
