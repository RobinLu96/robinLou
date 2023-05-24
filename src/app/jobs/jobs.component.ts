import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { transition, trigger, query, animateChild, style, animate, stagger, keyframes } from '@angular/animations';
import { robinExperience } from '../util/interface/robinExperience';
import { TagsService } from '../service/tags.service';
import { JobsDataService } from '../service/jobs-data.service';
import { ITag } from '../util/tag/tag-robin';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],

  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(
          ':enter',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-out',
                keyframes([
                  style({
                    transform: 'translateY(-25%)',
                    opacity: 0,
                    offset: 0
                  }),
                  style({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-in',
                keyframes([
                  style({ transform: 'translateY(0%)', offset: 0 }),
                  style({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ]),

    trigger('animateChildren', [
      transition('* => *', [
        query('@*, :enter', [animateChild()], { optional: true }),
        query('@*, :leave', [animateChild()], { optional: true })
      ])
    ])
  ]
})
export class JobsComponent implements OnInit{

  jobs: robinExperience[];
  tags: ITag[];

  tagSubscription$: EventEmitter<any>;

  selectedJob: robinExperience;
  router: any;

  constructor(
    private tagService: TagsService,
    private jobService: JobsDataService
  ){}

  ngOnInit(): void{
    this.renderJobs();
    this.tagSubscription$ = this.tagService.onTagUpdate;
    this.tagSubscription$.subscribe(() => {
      if(this.jobs.length === 0) this.renderJobs();
      else this.jobs = [];
    })
  }
  
  onProjectCardClick(data){
    this.selectedJob = data.job;
  }

  renderJobs(){
    this.jobs = this.jobService.getJobs();
  }

}
