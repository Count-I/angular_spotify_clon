import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  constructor(
    public contactService:ContactService,
    public configService:ConfigService,
    public authService:AuthService
    ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.authService.currentUser);
      
    }, 500);
  }
}
