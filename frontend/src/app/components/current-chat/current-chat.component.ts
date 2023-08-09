import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit{

  room:any="";
  constructor(
    private router:ActivatedRoute,
    private cookieService:CookieService,
    private s:ChatService
  ){

  }

  ngOnInit(): void {
      this.room = this.router.snapshot.paramMap.get('room')
      this.cookieService.set('room',this.room)
      console.log(this.room);

  }
}
