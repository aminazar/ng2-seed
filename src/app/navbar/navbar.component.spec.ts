/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from "@angular/router";
import {MdToolbarModule} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../auth.service";
import {RestService} from "../rest.service";
import {MessageService} from "../message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import { By } from '@angular/platform-browser';
import {DebugElement, Injectable} from "@angular/core";

class AuthMock {
  user = '';
  userType = '';
  private authStream = new Subject<boolean>();
  auth$: Observable<boolean> = this.authStream.asObservable();

  mockLogin(user,userType) {
    this.user = user;
    this.userType = userType;
    this.authStream.next(true);
  }

  mockLogout() {
    this.authStream.next(false);
  }
}

let authServiceMock;

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent],
      imports: [RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MdToolbarModule,
        HttpModule,
      ],
      providers: [
        {provide: AuthService, useClass: AuthMock},
        RestService, MessageService]
    })
    .compileComponents();
    authServiceMock = getTestBed().get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should observe login', () => {
    authServiceMock.mockLogin('xyz','admin');
    expect(component.isAdmin).toBe(true);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('a')[0].innerText).toContain('Ng2 Seed');
    expect(compiled.querySelectorAll('a')[1].innerText).toContain('xyz');
    // setTimeout(() =>{
    //   expect(compiled.querySelectorAll('a')[1].innerText).toContain('xyz');
    // },1000);
  })

  it('should observe logout', () =>{
    authServiceMock.mockLogout();
    expect(compiled.querySelectorAll('a')[0].innerText).toContain('Ng2 Seed');
    expect(compiled.querySelectorAll('a')[1].innerText).toContain('Login');
  })
});
