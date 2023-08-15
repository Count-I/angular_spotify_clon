import { Component } from '@angular/core';
import { ContactDetailComponent } from '../contact-detail.component';

@Component({
  selector: 'app-header-contact-detail',
  templateUrl: './header-contact-detail.component.html',
  styleUrls: ['./header-contact-detail.component.css']
})
export class HeaderContactDetailComponent {

  constructor( public contactDetail:ContactDetailComponent){

  }
}
