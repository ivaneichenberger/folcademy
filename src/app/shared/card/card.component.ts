import { Component } from '@angular/core';
interface movies_series { 
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  category: string,
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent {

  arrayInfoCard: movies_series[] = [
    {
      id: 1,
      name: 'Black Widow',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 2,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 3,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 4,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 5,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 6,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 7,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 8,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 9,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 9,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 9,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 9,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    }
  ]

}
