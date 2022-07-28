import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogged } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userLogged = new BehaviorSubject<UserLogged | undefined>(undefined);

  get userLogged() {
    return this._userLogged.asObservable()
  }

  get url() {
    return `${environment.apiURL}/api/signin`;
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(client: any) {
    return this.httpClient.post(this.url, client).pipe(
      switchMap((response: any) => {
        if ( response.token ) {
          this._userLogged.next(response);
        }
        return of(response);
      })
    );
  }

  logout() {
    this._userLogged.next(undefined);
    this.router.navigateByUrl('');
  }

}
