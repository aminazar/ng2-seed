import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLogComponent } from './chat-log.component';
import {MessageService} from "../message.service";
import {RestService} from "../rest.service";
import {AuthService} from "../auth.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {SocketService} from "../socket.service";

describe('ChatLogComponent', () => {
  let component: ChatLogComponent;
  let fixture: ComponentFixture<ChatLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLogComponent,  ],
      imports:[
        HttpModule,
        RouterTestingModule,
      ],
      providers: [
        AuthService,
        RestService, MessageService, SocketService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
