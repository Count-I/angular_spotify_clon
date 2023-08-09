import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { flatMap } from 'rxjs';
import { msg } from 'src/app/models/msg.model';
@Component({
  selector: 'app-selected-chat',
  templateUrl: './selected-chat.component.html',
  styleUrls: ['./selected-chat.component.css']
})
export class SelectedChatComponent implements OnInit {
  @ViewChild('scroll') private scrollContainer!: ElementRef;

  imagen = "../../../../../assets/col.png";
  model: string = "";
  msg: string = "";
  user = true;
  _class = "";
  messages: msg[] = []


  chats = [
    {
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },{
      user: false,
      msg: "hola"
    },
    {
      user: false,
      msg: "holas"
    },
  ]

  scrollToBottom(): void {
    setTimeout(() => { this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight; }, 1);
   }
  ngOnInit(): void {
    this.chats.forEach(e=>{
      this.messages.push(e)
    })
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.scrollToBottom();
    this.messages.push({
      user: this.user,
      msg: this.msg
    })
    this.msg = "";
    if(this.user){
      this.user=false
      return;
    }
    this.user=true
    return;
    // this._class = "justify-end";
  }

}
