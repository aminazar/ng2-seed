import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {SocketService} from "../socket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any = [];
  msg: string = null;
  isCollapse: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private socketService: SocketService) {
  }

  ngOnInit() {
    this.authService.auth$.subscribe(
      (data) => this.isLoggedIn = data,
      (err) => {
        this.isLoggedIn = false;
        console.log(err);
      }
    );

    let socketSubscriber = null;

    this.socketService.socketIsReady.subscribe(
      (isReady) => {
        if(isReady){
          socketSubscriber = this.socketService.getBroadcastMessage().subscribe(
            (data) => this.messages.push(data),
            (err) => console.log(err)
          );
        }
        else{
          if(socketSubscriber)
            socketSubscriber.unsubscribe();
        }
      }
    );
  }

  keyboardCheck(key) {
    if (key.keyCode === 13)
      this.send();
  }

  send() {
    if(this.msg === null || this.msg === '' || ! this.isLoggedIn)
      return;

    let data = {
      sender: this.authService.user,
      data: this.msg
    };

    this.messages.push(data);
    this.socketService.sendBroadcastMessage(data);

    this.msg = null;
  }

  collapseAction(value){
    this.isCollapse = value;
  }
}
