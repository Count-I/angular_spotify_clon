import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ContactService } from 'src/app/services/contact.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
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
export class ContactListComponent implements OnInit {
  @Input() isOpen = true;
  // contacts: Contact[] = [
  //   {
  //     contact_name: "raul",
  //     user: {
  //       user_id: "2",
  //       info: "Disponible",
  //       password: "",
  //       phone_number: 12,
  //       profile_photo: "",
  //       username: "r"
  //     },
  //     owner_id: "1"
  //   },
  //   {
  //     contact_name: "sebastian",
  //     user: {
  //       user_id: "3",
  //       info: "Disponible",
  //       password: "",
  //       phone_number: 15,
  //       profile_photo: "",
  //       username: "ra"
  //     },
  //     owner_id: "1"
  //   }
  // ];
  contacts:any;
  constructor(
    public contactService: ContactService,
    private authService: AuthService
  ) {
    this.contacts = this.authService.testUserList
  }

  createContact() {
    console.log("nuevo contacto");
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle();

    }, 1);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  closeComponent() {
    this.toggle();
    setTimeout(() => {
      this.contactService.closeContactList();
    }, 50);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.closeComponent();
    }
  }

}
