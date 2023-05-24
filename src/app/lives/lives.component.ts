import { Component, OnInit, EventEmitter } from '@angular/core';
import { transition, trigger, query, animateChild, style, animate, stagger, keyframes } from '@angular/animations';
import { robinLifeExperience } from '../util/interface/robinLifeExperience';
import { TagsService } from '../service/tags.service';
import { LivesDataService } from '../service/lives-data.service';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.scss'],
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
export class LivesComponent implements OnInit {

  lives: robinLifeExperience[];
  selectedLives: robinLifeExperience;
  router: any;

  tagSubscription$: EventEmitter<any>;

  constructor(
    private tagService: TagsService,
    private liveService: LivesDataService
  ) {}

  ngOnInit(): void {
    this.renderLives();
    this.tagSubscription$ = this.tagService.onTagUpdate;
    this.tagSubscription$.subscribe(() => {
      if(this.lives.length === 0) this.renderLives();
      else this.lives = [];
    })
  }

  onLiveCardClick(data) {
    this.selectedLives = data.job; 
  }

  renderLives(){
    this.lives = this.liveService.getLives();
  }
}
