import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  //get para traer data de un servicio
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  constructor(){

  }

  // agregarNuevoPersonaje (arg:Personaje) {

  //   this.personajes.push(arg)
  // }

}
