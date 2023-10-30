import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabComponent
  ]
})
export class LayoutModule { }
