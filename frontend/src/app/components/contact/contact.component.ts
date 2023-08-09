import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public contactService: ContactService) {
  }
  displayChat(user: any) {
    console.log(user);

  }
  contacts: Contact[] = [
    {
      contact_id: 1,
      first_name: 'Juan',
      last_name: 'Diego',
      profile_photo: 'https://www.ecartelera.com/images/sets/24100/24148.jpg',
      phone_number: 1,
      info: 'hey',
    },
    {
      contact_id: 2,
      first_name: 'Maria',
      last_name: 'Lopez',
      profile_photo: 'https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/06/scarlett-johansson-foto-instagram.jpg?resize=708%2C440&ssl=1',
      phone_number: 2,
      info: 'Avaible',
    },
    {
      contact_id: 3,
      first_name: 'Carlos',
      last_name: 'Gomez',
      profile_photo: 'https://hips.hearstapps.com/hmg-prod/images/matt-damon-arrives-premiere-of-foxs-ford-v-ferrari-held-at-news-photo-1611154704.',
      phone_number: 3,
      info: 'Ocupado',
    },
  ]
}
