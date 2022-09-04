import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <div>{{titulo}}</div>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)=" aculumar(base)"> + 5</button>
    <span>{{numero}}</span>
    <button (click)="aculumar(- base)"> - 5</button>

    `,
})

export class ContadorComponet {
    public titulo = 'Contador App';
    public numero: number = 0;
    public base: number = 5

    aculumar = (valor: number) => {
      this.numero += valor;
    }

}
