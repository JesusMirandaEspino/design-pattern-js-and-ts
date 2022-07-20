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


class Bebida2 extends Bebida{

    private sugar: number;

    constructor(name: string, sugar: number){  
        super(name);
        this.sugar = sugar;
    }
    
    info(): string{
        return super.info() + `, el nivel de azucar es: ${this.sugar}`;
    }

}

const bebida1 = new Bebida('Soda');
const bebida2 = new Bebida2('coke', 9.5);
console.log( bebida1.info() );
console.log( bebida2.info() );

