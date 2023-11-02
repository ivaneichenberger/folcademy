import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';



@NgModule({
  declarations: [
    HomeComponent,
    SeriesComponent,
    PeliculasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RoutesModule { }
