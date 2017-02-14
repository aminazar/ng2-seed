/**
 * Created by Amin on 27/09/2016.
 */
import {Injectable, OnInit, state} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
//TODO: For unknown reason, this does not work as login guard in app.routes.ts
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.auth$
      .take(1)
      .do(allowed => {
        if(!allowed){
          this.authService.originBeforeLogin = state.url;
          this.router.navigate(['login']);
        }
      });

  }
}
