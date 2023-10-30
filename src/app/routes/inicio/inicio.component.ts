import { Component } from '@angular/core';
import { MovieDBService } from 'src/app/movie-db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private movieDB: MovieDBService) {

  }
  getTrendingAll() {
    this.movieDB.getTrending().subscribe({
      next: (response) => { 
        console.log(response);
      }
    })
  }
}
