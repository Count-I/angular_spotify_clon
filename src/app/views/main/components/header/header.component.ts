import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  
  constructor(
    public configService: ConfigService,
    public contactService:ContactService,
    public authService:AuthService,
    ){
      
    }
}
