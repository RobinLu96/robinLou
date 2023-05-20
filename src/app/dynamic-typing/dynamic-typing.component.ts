import { Component,
OnInit,
ViewChild,
ElementRef,
Input
} from '@angular/core';

@Component({
  selector: 'app-dynamic-typing',
  templateUrl: './dynamic-typing.component.html',
  styleUrls: ['./dynamic-typing.component.scss']
})
export class DynamicTypingComponent {

  @Input('text') text = '';
  @Input('time') time = 0;
  @Input('delay') delay = 0;
  @ViewChild('cursor') cursorRef: ElementRef;

  displayText = '';
  isProcessRunning = false;

  constructor(){}

  ngOnInit(): void{
  }
 
  ngOnChanges(changes) {
    if (this.text) this.startRendering();
  }

  startRendering(){
    this.displayText = '';
    if (!this.isProcessRunning) {
      setTimeout(() => {
        const eachTime = Math.round(this.time / this.text.length);
        const textArr = this.text.split('');
        this.renderTextByLetter(textArr, eachTime);
      }, this.delay);
    }
    this.isProcessRunning = true;
  }

  renderTextByLetter(
    textArr: string[],
    timeInterval: number,
    letter = textArr[0]
  ) {
    if (!textArr || textArr.length <= 0) {
      const cursor = this.cursorRef.nativeElement as HTMLSpanElement;
      cursor.classList.add('cursor__animate');
      this.isProcessRunning = false;
      return;
    }
    setTimeout(() => {
      this.displayText += letter;
      const newTextArr = textArr.slice(1);
      this.renderTextByLetter(newTextArr, timeInterval, newTextArr[0]);
    }, timeInterval);
  }
  
}
