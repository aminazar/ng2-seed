/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture, getTestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {Router, RouterModule} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MdCheckboxModule, MdButtonModule, MdSnackBarModule, MdInputModule,
  MdToolbarModule, MdCardModule, MdIconModule
} from "@angular/material";
import {HttpModule, BaseRequestOptions, Http, XHRBackend} from "@angular/http";
import {AuthService} from "./auth.service";
import {RestService} from "./rest.service";
import {LoggedInGuard} from "./login/logged-in.guard";
import {MessageService} from "./message.service";
import {MockBackend} from "@angular/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ChatComponent} from "./chat/chat.component";
import {ChatLogComponent} from "./chat/chat-log.component";
import {RouterTestingModule} from "@angular/router/testing";
import {SocketService} from "./socket.service";
import {APP_BASE_HREF} from "@angular/common";

describe('App: Ng2-seed', () => {
  let app : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let mockBackend: MockBackend, restService: RestService, authService: AuthService, router: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        ChatComponent,
        ChatLogComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSnackBarModule,
        MdInputModule,
        MdToolbarModule,
        MdCardModule,
        MdIconModule,
        RouterTestingModule,
        RouterModule.forRoot([
          {path: '', component: HomeComponent, pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
        ]),
        ReactiveFormsModule,
      ],
      providers: [
        RestService,
        AuthService,
        MockBackend,
        BaseRequestOptions,
        MessageService,
        LoggedInGuard,
        SocketService,
        // {provide: Router, useClass: RouterStub},
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();

    mockBackend = getTestBed().get(MockBackend);
    restService = getTestBed().get(RestService);
    authService = getTestBed().get(AuthService);
    router = getTestBed().get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app works!'`, () => {
    expect(app.title).toEqual('app works!');
  });
});
