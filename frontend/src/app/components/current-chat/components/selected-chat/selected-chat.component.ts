import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { flatMap } from 'rxjs';
import { msg } from 'src/app/models/msg.model';
import { ChatService } from 'src/app/services/chat.service';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-selected-chat',
  templateUrl: './selected-chat.component.html',
  styleUrls: ['./selected-chat.component.css']
})
export class SelectedChatComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('scroll') private scrollContainer!: ElementRef;
  @ViewChild('child') child: any;
  user_number: number = 11;
  model: string = "";
  msg: string = "";
  user = true;
  messages: msg[] = []

  currentUser = {
    phone_number: 11,
  }

  chatContact = {
    currentUser: 11,
    contact: this.contactService.contact
  }

  constructor(
    public contactService: ContactService,
    private chatService: ChatService
  ) {

  }

  setMessages = (e: any) => {
    this.messages = e;
  }

  scrollToBottom(): void {
    setTimeout(() => { this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight; }, 1);
  }
  ngOnInit(): void {
    this.chatService.getMessages(this.setMessages, this.chatContact);
    setTimeout(() => {   
      console.log(this.messages);
      
      // this.messages = this.messages.filter((contact: any) => contact.contact_id == this.contactService.contact.contact_id);
    }, 1);
    this.scrollToBottom();
  }
  ngOnChanges(): void {
      this.chatService.onNewMessage(()=>{
        this.chatService.getMessages(this.setMessages, this.chatContact);
      })
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.scrollToBottom();
    // webSocket
    const msg = {
      user: false,
      contact_id: 1,
      message_text: this.msg,
      from_number: this.currentUser.phone_number,
      to_number: this.chatContact.contact.phone_number
    }

    this.chatService.sendMessage(msg)
    this.msg = "";
    if (this.user) {
      this.user = false
      return;
    }
    this.user = true
    return;
  }

  ngOnDestroy(): void {
    this.contactService.closeContactDetail();
  }
}
