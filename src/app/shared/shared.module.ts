import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardpelisComponent } from './cardpelis/cardpelis.component';



@NgModule({
  declarations: [
    CardComponent,
    CardpelisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ] 
})
export class SharedModule { }
