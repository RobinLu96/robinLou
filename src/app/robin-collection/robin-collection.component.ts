import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { robinCollection } from '../util/interface/robinCollectingExperience';
import { MbappeCollectionService } from '../service/mbappe-data.service';
import { DoncicCollectionService } from '../service/doncic-data.service';
import { SuperStarCollectionService } from '../service/superstar-data';

@Component({
  selector: 'app-robin-collection',
  templateUrl: './robin-collection.component.html',
  styleUrls: ['./robin-collection.component.scss']
})
export class RobinCollectionComponent implements OnInit {

  doncic: robinCollection[];
  mbappe: robinCollection[];
  otherStar: robinCollection[];
  url: string;
  animatedTypingText = '👉🔥 Check the Game-Worn jerseys, shoes & Trading cards owns or sold by Robin!! 🥇Sport Memorabilia Collection in Canada!🔥👈';

  dpLogoStyle = {
    height: '12rem',
    width: '12rem',
    borderWidth: '3px',
    url: './assets/icon/logo/logo2.jpg'
  };
  

  constructor(
    private doncicCollectionService: DoncicCollectionService,
    private mbappeCollectionService: MbappeCollectionService,
    private SuperStarCollectionService: SuperStarCollectionService,
    private router: Router  
  ) {  }

  ngOnInit(): void {
    this.doncic = this.doncicCollectionService.getDoncicCollection();
    this.mbappe = this.mbappeCollectionService.getMbappeCollection();
    this.otherStar = this.SuperStarCollectionService.getSuperStarCollection();
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
