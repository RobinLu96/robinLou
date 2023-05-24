import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { LivesDataService } from '../service/lives-data.service';
import { robinLifeExperience } from '../util/interface/robinLifeExperience';

@Component({
  selector: 'app-life-details',
  templateUrl: './life-details.component.html',
  styleUrls: ['./life-details.component.scss']
})
export class LifeDetailsComponent {

  public myData: any = "";
  public detailedLife: robinLifeExperience;
  public lifeid;

  constructor(
    public dynamicRoute: ActivatedRoute,
    private staticRoute: Router,
    private lifeService: LivesDataService
  ) { 

  }

  ngOnInit(): void {
    this.lifeid = this.dynamicRoute.snapshot.paramMap.get("id");
    this.detailedLife = this.lifeService.getLives().find(x => x.id == this.lifeid);
  }

  onBackClick(){
    this.staticRoute.navigateByUrl('/experience');
  }

}
