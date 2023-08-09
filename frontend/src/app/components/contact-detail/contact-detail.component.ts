import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  animations: [
    trigger('upDown', [
      state('up', style({
        height: '100%',
        opacity:1,
        // transform: 'translateY(0%)scale(1)'
      })),
      state('down', style({
        height: '0%',
        opacity:0.5,
        // transform: 'translateY(-100%)scale(1)'
      })),
      transition('up => down',[
        animate('0.2s')
      ]),
      transition('down => up', [
        animate('0.1s')
      ])
    ]),
    trigger('openClose', [
      state('open', style({
        height: '100%',
        opacity:1,
        transform: 'translate(0%)scale(1)'
      })),
      state('closed', style({
        height: '100%',
        opacity:0,
        transform: 'translate(100%)scale(1)'
      })),
      transition('open => closed',[
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ])
    ])
  ]
})
export class ContactDetailComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() isUp: boolean = false;
  constructor(public contactService: ContactService) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.toggleOpen();
    }, 1);
    setTimeout(() => {
      this.toogleUp();
    }, 400);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen
  }
  toogleUp(){
    this.isUp = !this.isUp
  }

  closeComponent(){
    this.toggleOpen();
    setTimeout(()=>{
      this.contactService.closeContactDetail();
    }, 50)
      
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key === 'Escape'){
      this.closeComponent();
    }
  }
}
