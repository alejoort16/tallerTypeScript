import { Animal } from './Animal';
import { Mamifero } from './Mamifero';
import {NoTrepa} from './NoTrepa';

export function ladrar(ladrado: string): string {
    return ladrado + 'Woof!';
}


export enum Movimientos{   
    DERECHA,
    IZQUIERDA
}

export class Perro extends Animal implements Mamifero {


    
    pelo: string;
    private nombre: string;  

    constructor(noTrepa: NoTrepa) {
        super(noTrepa);
    } 
    
    get getEdad(): number{
        return this.edad;
    }
    
    get getNombre(): string{
        return this.nombre;
    }
    get getRaza(): string{
        return this.raza;
    }

    set setEdad(val: number){
        this.edad = val;
    }

    set setNombre(val: string){
        this.nombre = val;
    }
    set setRaza(val: string){
        this.raza = val;
    }

    crecerPelo(): string {
        return 'Pelo creciendo';
    }

    moverse(movimiento: Movimientos): string{
        switch (movimiento) {
            case Movimientos.DERECHA:
                return 'Movimiento a la derecha';

            case Movimientos.IZQUIERDA:
                return 'Movimiento a la izquierda';
        
            default:
                'movimiento';
        }
        
    } 

}