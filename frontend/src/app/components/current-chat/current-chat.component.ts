import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from 'src/app/services/chat.service';
import { ContactService } from 'src/app/services/contact.service';
import { ViewChild } from '@angular/core'
import { ConfigService } from 'src/app/services/config.service';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit{
  room: any = "";
  constructor(
    private router: ActivatedRoute,
    private cookieService: CookieService,
    private socket: Socket,
    private chatService:ChatService,
    public contactService: ContactService,
    public configService: ConfigService
  ) {
  }
  ngOnInit(): void {
    // this.room = this.router.snapshot.paramMap.get('room')
    // this.cookieService.set('room',this.room)
    // console.log(this.room);
  }
  // checkStatus(): void {
  //   this.socket.on('connect', () => {
  //     console.log('Connect to Socket Server...');
  //     // this.socketStatus = true;
  //   });

  //   this.socket.on('disconnect', () => {
  //     console.log('Disconnect from Socket Server...');
  //     // this.socketStatus = false;
  //   });
  // }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key === 'Escape') {
      if ((!this.contactService.contactDetail.getValue()) && (!this.configService.config.getValue())) {
        this.contactService.closeChat();

        this.contactService.loading.next(false);
      } else {
        // if(!(this.configService.config.getValue())){
        //   this.contactService.closeContactDetail();
        //   this.contactService.contactDetail.next(false);
        // }
        // setTimeout(() => {     
        //   this.configService.closeMainConfig();
        //   // this.configService.config.next(false);
        // }, 1000);
      }

    }
  }

}
