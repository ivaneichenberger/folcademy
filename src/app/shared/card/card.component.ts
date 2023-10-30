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
      name: 'Hora de Aventura',
      description: 'serie de CN',
      image: '../../../assets/horadeaventura.jfif',
      rating: 8,
      category: 'serie',
    },
    {
      id: 3,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/loki.jfif',
      rating: 7,
      category: 'pelicula',
    },
    {
      id: 4,
      name: 'Rick y Morty',
      description: 'Serie sobre un abuelo y su nieto',
      image: '../../../assets/rickymorty.jfif ',
      rating: 9,
      category: 'serie',
    },
    {
      id: 5,
      name: 'Iron Man 3',
      description: 'pelicula de marvel',
      image: '../../../assets/ironman3.jpg',
      rating: 7,
      category: 'pelicula',
    },
    {
      id: 6,
      name: 'Malcom del medio',
      description: 'Hermanos',
      image: '../../../assets/malcom.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 7,
      name: 'Huye',
      description: 'terror y suspenso',
      image: '../../../assets/blackwidow.jpg',
      rating: 9,
      category: 'pelicula',
    },
    {
      id: 8,
      name: 'Naruto',
      description: 'anime',
      image: '../../../assets/blackwidow.jpg',
      rating: 7,
      category: 'serie',
    },
    {
      id: 9,
      name: 'Thor',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 10,
      name: 'Como conoci a tu madre',
      description: 'serie de humor',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    },
    {
      id: 11,
      name: 'Avengers',
      description: 'pelicula de marvel',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'pelicula',
    },
    {
      id: 12,
      name: 'Merlina',
      description: 'serie sobre ',
      image: '../../../assets/blackwidow.jpg',
      rating: 6.8,
      category: 'serie',
    }
    
  ]

}
