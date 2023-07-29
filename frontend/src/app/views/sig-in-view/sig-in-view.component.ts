import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sig-in-view',
  templateUrl: './sig-in-view.component.html',
  styleUrls: ['./sig-in-view.component.css']
})
export class SigInViewComponent {
  constructor(public router: Router,
    public auth: AuthService){

  }

}
