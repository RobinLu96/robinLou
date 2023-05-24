import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { robinExperience } from '../util/interface/robinExperience';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  
  @Input('job') job: robinExperience;
  @Output('select') select = new EventEmitter();

  ngOnInit(): void {}
  
  onCardClick(job: robinExperience){
    this.select.emit({job});
  }
}
