import { NgModule } from '@angular/core';
import { HeroeComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeroeComponet,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{

}
