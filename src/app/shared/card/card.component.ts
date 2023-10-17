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
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 1,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    }
  ]

}
