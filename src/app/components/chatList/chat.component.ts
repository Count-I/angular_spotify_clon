import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // contact!: Contact;
  contacts: any;
  chats: any[] = [];
  constructor(
    public chatService: ChatService,
    public contactService: ContactService,
    public authService: AuthService
  ) {
    // this.contact = contactService.contact; // old feature
    this.contacts = authService.testUserList;
  }
  // displayChat(user: any) {
  //   console.log(user);
  // }

  ngOnInit(): void {
  }

}
