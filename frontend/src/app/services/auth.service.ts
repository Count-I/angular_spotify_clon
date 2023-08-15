import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { ChatService } from './chat.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public phone!: string;
  public currentUser!: any;
  public selectedUser!: any;
  public testUserList = [
    {
      id: 1,
      name: 'Leonardo',
      phone: '3227679915',
      info: 'Avaible',
      image: 'http://placekitten.com/200/300',
      roomId: {
        2: 'room-1',
      }
    },
    {
      id: 2,
      name: 'Santiago Osorio',
      phone: '3174127026',
      info: 'Avaible',
      image: 'http://placekitten.com/g/200/300',
      roomId: {
        1: 'room-1',
      }
    },
  ];
  areSignining = new BehaviorSubject<Boolean>(true);
  loggedIn = new BehaviorSubject<Boolean>(false);
  constructor(
    public router: Router,
    public chatService: ChatService
    ) { 
      if(this.isLoggedIn()){
        this.currentUser = this.testUserList.find(user => user.phone === localStorage.getItem('currentUser'));
        this.testUserList = this.testUserList.filter((user) => user.phone !== localStorage.getItem('currentUser'));
      }
    }

  isSignining() {
    if (this.router.url === '/signin') {
      this.areSignining.next(true);
    } else {
      this.areSignining.next(false);
    }
    return this.areSignining.asObservable();
  }
  goToSignIn() {
    this.router.navigateByUrl('signin');
  }
  goToSignUp() {
    this.router.navigateByUrl('signup');
  }

  login(incommingUser: any){
    this.currentUser = this.testUserList.find(user => user.phone === incommingUser.phone);
    this.testUserList = this.testUserList.filter((user) => user.phone !== incommingUser.phone);
    localStorage.setItem('currentUser', this.currentUser.phone);
    this.loggedIn.next(true);
    if (this.currentUser) {
      this.router.navigateByUrl('/')
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  
  selectUserHandler(phone: any){
    this.selectedUser = this.testUserList.find(user => user.phone === phone);

    this.chatService.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.chatService.chats = [];


      this.chatService.storage = this.chatService.getStorage();
      const storeIndex = this.chatService.storage
        .findIndex((storage) => storage['roomId'] === this.chatService.roomId)!;

    if(storeIndex > -1){
      this.chatService.chats = this.chatService.storage[storeIndex]['chats']; 
    }

    this.join(this.currentUser.name, this.chatService.roomId);
  }

  join(username: string, roomId: string):void{
    this.chatService.joinRoom({user:username, room:roomId})
  }

}
