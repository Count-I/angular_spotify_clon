import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { msg } from '../models/msg.model';

@Injectable({
  providedIn:'root'
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(msg: any) {
    this.socket.emit('client:sendMessage', msg);
  }
  onNewMessage(callback:any){
    this.socket.on('server:newMessage', callback )
  }
  getMessages(callback?:any, chatContact?:any) {
    this.socket.emit('client:getMessages', chatContact)
    this.socket.on('server:emitMessages', callback)
  }
}