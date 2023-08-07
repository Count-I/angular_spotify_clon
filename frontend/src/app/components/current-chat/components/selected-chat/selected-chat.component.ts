import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { flatMap } from 'rxjs';
import { msg } from 'src/app/models/msg.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-selected-chat',
  templateUrl: './selected-chat.component.html',
  styleUrls: ['./selected-chat.component.css']
})
export class SelectedChatComponent implements OnInit{
  @ViewChild('scroll') private scrollContainer!: ElementRef;
  @ViewChild('child') child: any;
  
  user_number:number=312;
  model: string = "";
  msg: string = "";
  user = true;
  _class = "";
  messages: msg[] = []
  display:boolean= false;
  chats:msg[] = [
    {
      user: false,
      contact_id:1,
      message_text: "hola",
      from_number: 1,
      to_number: this.user_number
    },
    {
      user: false,
      contact_id:2,
      message_text: "claro",
      from_number: 2,
      to_number: this.user_number
    },
    {
      user: false,
      contact_id:3,
      message_text: "fue ayer",
      from_number: 3,
      to_number: this.user_number
    },
    {
      user: false,
      contact_id:3,
      message_text: "y yo pensé que estaba mal",
      from_number: 123,
      to_number: this.user_number
    },
    {
      user: false,
      contact_id:1,
      message_text: "hola",
      from_number: this.user_number,
      to_number: 1
    },
    {
      user: false,
      contact_id:2,
      message_text: "entiendo",
      from_number: this.user_number,
      to_number: 2
    },
    {
      user: false,
      contact_id:3,
      message_text: "Ah si?",
      from_number: this.user_number,
      to_number: 3
    },
    {
      user: false,
      contact_id:3,
      message_text: "hajajajajjajaja",
      from_number: this.user_number,
      to_number: 3
    }
  ]
  constructor(public contactService:ContactService){

  }
  scrollToBottom(): void {
    setTimeout(() => { this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight; }, 1);
   }
  ngOnInit(): void {
    this.messages=this.chats.filter((contact)=> contact.contact_id == this.contactService.contact.contact_id);
    this.scrollToBottom();
  }
  handleSubmit(e: any) {
    e.preventDefault();
    this.scrollToBottom();
    this.messages.push({
      user: this.user,
      message_text: this.msg,
    })
    console.log(this.chats);
    
    this.msg = "";
    if(this.user){
      this.user=false
      return;
    }
    this.user=true
    return;
  }

}
