import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() layoutGap = 12;
  @Input() template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
