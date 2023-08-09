import { Component, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
imagen:string="https://media.diariolasamericas.com/p/fe8db18fa8fb42e1d8f17ffc38e2018b/adjuntos/216/imagenes/000/214/0000214007/fotogaleria-las-actrices-mejor-pagadas-hollywood.jpg"

constructor(public configService: ConfigService){
  
}
}
