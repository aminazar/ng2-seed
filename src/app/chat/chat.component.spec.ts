import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import {AuthService} from "../auth.service";
import {MessageService} from "../message.service";
import {RestService} from "../rest.service";
import {ChatLogComponent} from "./chat-log.component";
import { MdGridListModule } from "@angular/material";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {SocketService} from "../socket.service";

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent,ChatLogComponent ],
      imports:[
        MdGridListModule,
        FormsModule,
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
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
