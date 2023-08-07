import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  displayed = new BehaviorSubject<boolean>(false);
  loading = new BehaviorSubject<boolean>(false);
  contact!: Contact;

  displayChat(contact: any) {
    this.closeChat();
    this.loading.next(true);
    setTimeout(() => {
      this.displayed.next(true);
    }, 4);
    this.contact = contact;
  }
  closeChat() {
    this.displayed.next(false);
  }
  isDisplay(): Observable<boolean> {
    return this.displayed.asObservable();
  }
  isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
  currentChat() {
    return this.contact;
  }


}
