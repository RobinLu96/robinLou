import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-robin-icon',
  templateUrl: './robin-icon.component.html',
  styleUrls: ['./robin-icon.component.scss']
})
export class RobinIconComponent implements OnInit, OnChanges {

  imgStyle: {};
  logoStyles: {};
  link: {};
  @Input('height') height: string;
  @Input('width') width: string;
  @Input('borderWidth') borderWidth: string;
  @Input('url') url: string;

  constructor() { }

  // ngOnInit(): void {
  // }
  ngOnInit() {
    this.logoStyles = {
      height: this.height,
      width: this.width
    };
    this.imgStyle = {
      borderWidth: this.borderWidth
    };
    // console.log(this.height);
    // console.log(this.width);
    // console.log(this.borderWidth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}