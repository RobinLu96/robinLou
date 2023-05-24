import { Component, OnInit } from '@angular/core';
import { robinLifeExperience } from '../util/interface/robinLifeExperience';
import { Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-life-card',
  templateUrl: './life-card.component.html',
  styleUrls: ['./life-card.component.scss']
})
export class LifeCardComponent implements OnInit {

  @Input('life') life: robinLifeExperience;
  @Output('select') select = new EventEmitter();

  ngOnInit(): void{
  }

  OnCardClick(job: robinLifeExperience){
    this.select.emit({job});
  }

}
