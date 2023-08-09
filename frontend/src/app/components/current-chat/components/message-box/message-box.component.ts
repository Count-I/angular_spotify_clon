import { Component, Input, OnInit } from '@angular/core';
import { msg } from 'src/app/models/msg.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent{
  @Input() msg!: msg;

}

