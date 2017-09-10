import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.css']
})
export class ChatLogComponent implements OnInit {
  @Input('message') msg;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
