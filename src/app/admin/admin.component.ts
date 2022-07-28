import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogged } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userLogged$!: Observable<UserLogged | undefined>

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.userLogged$ = this.loginService.userLogged;
  }

  doLogout() {
    this.loginService.logout()
  }
}
