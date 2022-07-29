import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
