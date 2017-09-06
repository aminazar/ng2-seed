import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SocketService {
  public socketIsReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private socket: any = null;
  private broadcastSocket: any = null;
  private url: string = 'http://localhost:3000';

  constructor() { }

  private broadcastObservable = new Observable(observer => {
    this.broadcastSocket.on('brcv', (data) => {
      observer.next(data)
    });
  });

  private messageObservable = new Observable(observer => {
    this.socket.on('msg', (data) => {
      observer.next(data)
    });
  });

  connect(user){
    this.socket = io(this.url + (user==='admin'?'/admin':'/user') + '/' + user);
    this.broadcastSocket = io(this.url + '/user');
    this.socketIsReady.next(true);
  }

  sendMessage(data){
    this.socket.emit('msg', data);
  }

  getMessage(){
    return this.messageObservable;
  }

  getBroadcastMessage(){
    return this.broadcastObservable;
  }

  sendBroadcastMessage(data){
    this.broadcastSocket.emit('bmsg', data);
  }
}
