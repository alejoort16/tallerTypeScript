import { Component } from '@angular/core';
import { Gato } from './Gato';
import { Trepar } from './Trepar';
import { ladrar, Perro, Movimientos } from './Perro';
import { NoTrepa } from './NoTrepa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller1';
  trepar: Trepar;
  noTrepa: NoTrepa;

  constructor(){
    let gato = new Gato(this.trepar);
    let perro = new Perro(this.noTrepa);

    //Metodos de moverse del perro
    perro.moverse(Movimientos.DERECHA);
    perro.moverse(Movimientos.IZQUIERDA);

    //metodo maullar y ladrar, ladrar no necesita llamarse
    //desde objeto perro ya que en la clase se le hace el export y esto permite
    //llamara directamente la función
    gato.maullar('Maullido de gato Max ');
    ladrar('Ladrado de perra Kiara ');

    //Metodo de crecer pelo de gato y perro
    gato.crecerPelo();
    perro.crecerPelo(); 
    
  }
}


