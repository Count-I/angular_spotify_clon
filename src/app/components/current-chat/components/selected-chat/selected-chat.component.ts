import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { flatMap } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-selected-chat',
  templateUrl: './selected-chat.component.html',
  styleUrls: ['./selected-chat.component.css']
})
export class SelectedChatComponent implements OnInit, OnDestroy {
  @ViewChild('scroll') private scrollContainer!: ElementRef;
  @ViewChild('child') child: any;
  user_number: number = 11;
  model: string = "";
  msg: string = "";
  user = true;
  room: string = "room-1"
  messages: any[] = [] // should be Message type
  storageArray: any[] = [];
  condition: boolean = false;
  currentSession = localStorage.getItem('session');

  constructor(
    public contactService: ContactService,
    private chatService: ChatService,
    public authService: AuthService
  ) {

  }

  setMessages = (e: any) => {
    this.messages = e;
  }

  renderMessages() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => { this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight; }, 60);
  }
  ngOnInit(): void {
    this.chatService.loadMessages(this.chatService.roomId);
    this.scrollToBottom();

    this.chatService.getMessage()
      .subscribe((data: any) => {
        if (this.chatService.roomId) {
          setTimeout(() => {
            this.messages = data;
            this.scrollToBottom();
          }, 4);
        }
      });
  }

  sendMessage() {
    this.scrollToBottom();
    this.chatService.sendMessage({
      user: this.authService.currentUser.name,
      room: this.chatService.roomId,
      message: this.msg
    });

    this.chatService.storage = this.chatService.getStorage();
    const storeIndex = this.chatService.storage
      .findIndex((storage) => storage['roomId'] === this.chatService.roomId)!;

    if (storeIndex > -1) {
      this.chatService.storage[storeIndex]['chats'].push({
        user: this.authService.currentUser.name,
        message: this.msg
      });
    } else {
      const updateStorage = {
        roomId: this.chatService.roomId,
        chats: [{
          user: this.authService.currentUser.name,
          message: this.msg
        }]
      };

      this.chatService.storage.push(updateStorage);
    }

    this.chatService.setStorage(this.chatService.storage);
    this.msg = "";
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.contactService.closeContactDetail();
  }
}
