import { Component, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { ContactService } from 'src/app/services/contact.service';
import { ContactListComponent } from '../../contact-list.component';

@Component({
  selector: 'app-contact-list-header',
  templateUrl: './contact-list-header.component.html',
  styleUrls: ['./contact-list-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderContactListComponent {
imagen:string="https://media.diariolasamericas.com/p/fe8db18fa8fb42e1d8f17ffc38e2018b/adjuntos/216/imagenes/000/214/0000214007/fotogaleria-las-actrices-mejor-pagadas-hollywood.jpg"

constructor(public configService: ConfigService, public contactListComponent:ContactListComponent){
  
}
}
