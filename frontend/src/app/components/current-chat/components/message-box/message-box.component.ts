import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { msg } from 'src/app/models/msg.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit, OnChanges{
  @Input() msg!: msg;
  @Input() color!: string;
  left!:boolean;
  rounded!:string
  text!:string;
  back!:string;
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.color==='#005c4b'){
      this.left = true;
      this.rounded= 'rounded-tr-[0px]'
      this.text = `text-[#005c4b]`;
      this.back = `bg-[#005c4b]`;
    }else{
      this.left = false;
      this.rounded= 'rounded-tl-[0px]'
      this.text = `text-[#202c33]`;
      this.back = `bg-[#202c33]`;
    }
  }
}

