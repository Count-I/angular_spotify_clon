import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-main-config',
  templateUrl: './main-config.component.html',
  styleUrls: ['./main-config.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100%',
        transform: 'translate(-100% )scale(1)',
      })),
      state('closed', style({
        height: '100%',
        transform: 'translate(0%, 0%)scale(1)',
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class MainConfigComponent implements OnInit{
  
  @Input() isOpen = true;

  constructor(public configService: ConfigService) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.toggle();
      
    }, 1);
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

  closeComponent(){
    this.toggle();
    setTimeout(()=>{
      this.configService.closeMainConfig();
    }, 50);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event:KeyboardEvent){
    if( event.key == 'Escape'){
      this.closeComponent();
    }
  }
}
