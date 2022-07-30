import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fallIn', [
      transition(':enter', [
        style({opacity:'0', transform: 'translateY(40px)'}),
        animate('.4s .2s ease-in-out', style({opacity:'1', transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({opacity:'1', transform: 'translateX(0)'}),
        animate('.6s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
      ])
    ]),

    trigger('moveInRight', [
      transition(':enter', [
        style({opacity:'0', transform: 'translateX(100px)'}),
        animate('.6s {{atraso}}ms ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
      ], {params: {atraso: 200}})
    ])
  ]
})
export class HomeComponent implements OnInit {
  homeData!: any;
  
  constructor(
    private homeService: HomeService
    ) { }

  ngOnInit(): void {
    this.homeService.loadHome().subscribe((response: any) => {
      this.homeData = response
    })
  }

}
