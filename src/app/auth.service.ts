import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {RestService} from "./rest.service";

@Injectable()
export class AuthService {
  private authStream = new Subject<boolean>();
  auth$ = this.authStream.asObservable();

  constructor(private restService: RestService) {
    this.authStream.next(false)
  }

  logIn(username, password) {
    this.restService.update('login', null, {username: username, password: password})
      .subscribe(() => {
          this.authStream.next(true);
        },
        err => {
          this.authStream.next(false);
        })
  }

  logOff() {
    this.restService.get('logout')
      .subscribe(() => {
        this.authStream.next(false)
      });
  }
}
