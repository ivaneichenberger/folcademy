import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  botonSeleccionado: number | null = null;

  seleccionarBoton(boton: number) {
    this.botonSeleccionado = boton;
  }
}
