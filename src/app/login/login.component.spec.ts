/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MdButtonModule, MdCardModule, MdIconModule,
  MdInputModule
} from "@angular/material";

import {AuthService} from "../auth.service";
import {RestService} from "../rest.service";
import {RouterTestingModule} from "@angular/router/testing";
import 'hammerjs';
import {MessageService} from "../message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SocketService} from "../socket.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterTestingModule,
        MdInputModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule,
      ],
      providers: [AuthService, RestService, MessageService, SocketService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be enabled initially', () => {
    expect(component.loginEnabled).toBeFalsy();
  });

  it('should be enabled after entring user/pass', () => {
    component.username = 'amin';
    component.password = 'test123';
    component.onChange();
    expect(component.loginEnabled).toBeTruthy();
  })
});
