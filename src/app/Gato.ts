import { Animal } from './Animal';
import { Mamifero } from './Mamifero';
import {Trepar} from './Trepar';


export class Gato extends Animal implements Mamifero {

    pelo: string;
    crecerPelo(): string {
       return 'Pelo creciendo';
    }
    constructor(trepa: Trepar) {
        super(trepa);
    } 
    
    get getEdad(): number{
        return this.edad;
    }
    
    
    get getRaza(): string{
        return this.raza;
    }

    set setEdad(val: number){
        this.edad = val;
    }

    set setRaza(val: string){
        this.raza = val;
    }

     maullar(maullido: string): string{
        return maullido + 'meow!';
    }


}