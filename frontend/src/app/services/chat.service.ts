import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends Socket{

  outEven: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService, socket:Socket) {
    super({
      url: 'http://localhost:3000',
      options:{
        query:{
          nameRoom: cookieService.get('room')
        }
      }
    });
  }

  
}
