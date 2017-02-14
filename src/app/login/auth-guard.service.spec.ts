/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from "../auth.service";
import {RestService} from "../rest.service";
import {Http, BaseRequestOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Router} from "@angular/router";

class RouterStub {
  navigateByUrl(url: string) { return url; }
  navigate(url: string){ return url; }
};

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, AuthService, RestService, MockBackend, BaseRequestOptions,
        { provide: Router,      useClass: RouterStub },
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
      }]
    });
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
