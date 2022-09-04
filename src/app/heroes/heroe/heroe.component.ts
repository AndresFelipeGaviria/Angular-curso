import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'hero.component.html'
})
export class HeroeComponet {

  nombre: string = 'Ironman';
  edad: number = 45;


  public get nombreCapitalizado() : string {
    return this.nombre.toUpperCase()
  }

  obtenerNombre ():string {

    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre ( ): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad () {
    this.edad = 30
  }
}
