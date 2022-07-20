console.log('Hola mundo');

class Bebida{

    private name: string;

    constructor(name: string){  
        this.name = name;
    }

    info(): string{
        return `El nombre de la bebida es ${this.name}`;
    }

}


const bebida1 = new Bebida('Soda');

console.log( bebida1.info() );