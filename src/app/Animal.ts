import {Trepar} from './Trepar';

export class Animal {

    constructor(trepar:Trepar){

    }

    protected edad: number;
    protected raza: string;  
    
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


}