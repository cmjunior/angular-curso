import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private httpClient: HttpClient
  ) { }

  loadHome() {
    return this.httpClient.get('assets/home.json')
  }
}
