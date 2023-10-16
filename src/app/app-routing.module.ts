import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';

const routes: Routes = [{
  path: "Inicio", component: InicioComponent
},
{
  path: "Peliculas", component: PeliculasComponent
},
{
  path: "Series", component: SeriesComponent
},
{
  path: "Ingresar", component: IngresarComponent
},

{
  path: "**",
  redirectTo: "Inicio"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
