// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @Output('ExploreMe')
  ExploreMe = new EventEmitter();

  startTadaAnimation = true;

  constructor() { }

  ngOnInit(): void {
        setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 4000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}
