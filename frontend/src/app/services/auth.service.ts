import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  areSignining = new BehaviorSubject<Boolean>(true);

  constructor(public router: Router) { }
  
  isSignining(){
    if(this.router.url === '/signin'){
      this.areSignining.next(true);
    }else{
      this.areSignining.next(false);
    }
    return this.areSignining.asObservable();
  }
  goToSignIn(){
    this.router.navigateByUrl('signin');
  }
  goToSignUp(){
    this.router.navigateByUrl('signup');
  }
}
