import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  template: `
  <h1>Series</h1>
  <app-card *ngFor="let card of serieCards" [category]="card.category"></app-card>
`
})
export class SeriesComponent {
  serieCards = [
    { category: 'serie' },
    { category: 'serie' },
  ];
}
