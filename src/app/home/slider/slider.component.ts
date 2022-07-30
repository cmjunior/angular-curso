import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;

  @Input() layoutGap = 12;
  @Input() template!: TemplateRef<any>;

  scrollLeft = 0;
  scrollLeftMax = 0;
  containerWidth = 0;
  sliderHeight = 0;
  buttonTopPosition = 0;
  scrollWidth = 200;

  constructor() {}

  ngAfterViewInit(): void {
    this.scrollLeftMax = this.slider.nativeElement.scrollLeftMax;

    this.containerWidth = this.container.nativeElement.offsetWidth;
    this.sliderHeight = this.slider.nativeElement.offsetHeight;

    this.buttonTopPosition = this.sliderHeight/2 - 32;
    this.scrollWidth = this.slider.nativeElement.childNodes[0].offsetWidth+this.layoutGap;
    
    this.slider.nativeElement.addEventListener('scroll', () => {
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    })
  }

  ngOnInit(): void {
  }

  doScrollForward() {
    this.slider.nativeElement.scrollLeft += this.scrollWidth;
  }

  doScrollBack() {
    this.slider.nativeElement.scrollLeft -= this.scrollWidth;
  }

}