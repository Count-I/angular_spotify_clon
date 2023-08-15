import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { AuthService } from './auth.service';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private authService: AuthService,
    private chatService: ChatService
  ) { }

  displayed = new BehaviorSubject<boolean>(false);
  loading = new BehaviorSubject<boolean>(false);
  contactDetail = new BehaviorSubject<boolean>(false);
  contactList = new BehaviorSubject<boolean>(false);
  contact!: any;

  displayChat(contact: any) {
    this.authService.selectUserHandler(contact.phone);
      this.closeChat();
    this.loading.next(true);
    setTimeout(() => {
      this.displayed.next(true);
    }, 4);
    this.contact = contact; // old feature
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

  isContactDetailActive(): Observable<boolean> {
    return this.contactDetail.asObservable();
  }
  showContactDetail() {
    this.contactDetail.next(true)
  }
  closeContactDetail() {
    this.contactDetail.next(false)
  }

  isContactListActive(): Observable<boolean> {
    return this.contactList.asObservable();
  }
  showContactList() {
    this.contactList.next(true);
  }
  closeContactList() {
    this.contactList.next(false);
  }

}
