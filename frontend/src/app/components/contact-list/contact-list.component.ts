import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: any = [
    {
        img: 'https://www.ecartelera.com/images/sets/24100/24148.jpg',
        name: 'Juan Diego',
        state: 'Busy',
    },
    {
        img: 'https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/06/scarlett-johansson-foto-instagram.jpg?resize=708%2C440&ssl=1',
        name: 'Maria Lopez',
        state: 'Available',
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/matt-damon-arrives-premiere-of-foxs-ford-v-ferrari-held-at-news-photo-1611154704.',
        name: 'Carlos Gomez',
        state: 'Offline',
    },
    {
        img: 'https://media.diariolasamericas.com/p/fe8db18fa8fb42e1d8f17ffc38e2018b/adjuntos/216/imagenes/000/214/0000214007/fotogaleria-las-actrices-mejor-pagadas-hollywood.jpg',
        name: 'Ana Martinez',
        state: 'Away',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/220px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
        name: 'Pedro Ramirez',
        state: 'Available',
    },
    {
        img: 'https://i.pinimg.com/236x/fa/c1/b7/fac1b742ee935f7062bc235c5cff32f0--elizabeth-olsen.jpg',
        name: 'Laura Torres',
        state: 'Busy',
    },
    {
        img: 'https://imagenes.elpais.com/resizer/gmmMvlo0AcoA8NR0ffRdCxezDEU=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SAFAVYAWGVDW3EBQNSYJLPSFXY.jpg',
        name: 'Jorge Silva',
        state: 'Away',
    },
    {
        img: 'https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/06/EFHLYOPO4FF3HI4VEVLG7EWBXE.jpg?resize=708%2C398&ssl=1',
        name: 'Isabel Hernandez',
        state: 'Available',
    },
];

}
