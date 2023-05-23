// import { TagsService } from './../service/tags.service';
import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @ViewChild('experienceHeader') experienceHeaderRef: ElementRef;
  @ViewChild('experienceArea') experienceAreaRef: ElementRef;
  @ViewChild('experienceSelectionArea') experienceSelectionAreaRef: ElementRef;

  animatedTypingText = '👉🔥 Yoooo, checking my Work Experience & Personal Experience! 🔥👈';

  dpLogoStyle = {
    height: '12rem',
    width: '12rem',
    borderWidth: '3px',
    url: './assets/icon/logo/logo.jpg'
  };
  
  setFixedPostion = false;

  // constructor(private router: Router, private tagsService: TagsService) { }
  constructor(private router: Router){}
  ngOnInit() {
  //   this.updateAnimatedTextOnce();
  }

  // updateAnimatedTextOnce() {
  //   let updateCount = 0;
  //   this.tagsService.onTagUpdate.subscribe(() => {
  //     if (updateCount === 0) {
  //       this.animatedTypingText =
  //         'Great! Have a great day! 😊';
  //       updateCount++;
  //     }
  //   });
  // }
  
  @HostListener('window:scroll')
  onScroll() {
    const experienceHeader: HTMLElement = this.experienceHeaderRef.nativeElement;
    const experienceArea: HTMLElement = this.experienceAreaRef.nativeElement;
    const experienceSelectionArea: HTMLElement = this.experienceSelectionAreaRef
      .nativeElement;
  
    const thresoldHeight =
      experienceHeader.scrollHeight + experienceHeader.offsetTop;
  
    const experienceSelectionHeight =
      experienceSelectionArea.scrollHeight + experienceSelectionArea.offsetTop;
  
    if (window.scrollY > thresoldHeight) {
      experienceArea.style.marginTop = `${experienceSelectionHeight + 5}px`;
      this.setFixedPostion = true;
    } else {
      experienceArea.style.marginTop = `inherit`;
      this.setFixedPostion = false;
      const factor = 1 - window.scrollY / (thresoldHeight + 40);
      // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
      this.dpLogoStyle = {
        ...this.dpLogoStyle,
        height: `${12 * factor}rem`,
        width: `${12 * factor}rem`
      };
      experienceHeader.style.opacity = factor.toString();
    }
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }

}
