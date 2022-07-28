import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs';
import { UserLogged } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private route: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( state.url ) {
      this.route = state.url;
    }
    return this.isUserLogged();
  }

  isUserLogged() {
    return this.loginService.userLogged.pipe(
      map( (userLogged: UserLogged | undefined) => {
        if ( userLogged && userLogged.admin ) {
          return true;
        } else {
          this.router.navigateByUrl(`/login${ this.route }`);
          return false;
        }
      })
    )
  }
}