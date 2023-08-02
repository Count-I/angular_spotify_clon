import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  chats : any = [
    {
      img: 'https://www.ecartelera.com/images/sets/24100/24148.jpg',
      name: 'Juan Diego',
      message: 'hey',
      hour: '3:15'
    },
    {
      img: 'https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/06/scarlett-johansson-foto-instagram.jpg?resize=708%2C440&ssl=1',
      name: 'Maria Lopez',
      message: 'boludo',
      hour: '4:50'
  },
  {
    img: 'https://hips.hearstapps.com/hmg-prod/images/matt-damon-arrives-premiere-of-foxs-ford-v-ferrari-held-at-news-photo-1611154704.',
    name: 'Carlos Gomez',
    message: 'nos vemos',
    hour: '2:10'
  },
  {
    img: 'https://media.diariolasamericas.com/p/fe8db18fa8fb42e1d8f17ffc38e2018b/adjuntos/216/imagenes/000/214/0000214007/fotogaleria-las-actrices-mejor-pagadas-hollywood.jpg',
    name: 'Ana Martinez',
    message: 'todo bien',
    hour: '1:00'
},
{
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/220px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
    name: 'Pedro Ramirez',
    message: 'ya estoy',
    hour: '10:30'
},
{
    img: 'https://i.pinimg.com/236x/fa/c1/b7/fac1b742ee935f7062bc235c5cff32f0--elizabeth-olsen.jpg',
    name: 'Laura Torres',
    message: 'cuidate',
    hour: '09:45'
},
{
    img: 'https://imagenes.elpais.com/resizer/gmmMvlo0AcoA8NR0ffRdCxezDEU=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SAFAVYAWGVDW3EBQNSYJLPSFXY.jpg',
    name: 'Jorge Silva',
    message: 'chao',
    hour: '8:30'
},
{
    img: 'https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/06/EFHLYOPO4FF3HI4VEVLG7EWBXE.jpg?resize=708%2C398&ssl=1',
    name: 'Isabel Hernandez',
    message: 'me encastas',
    hour: '7:30'
},
  ]
}
