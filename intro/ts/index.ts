console.log('Hola mundo');

interface Product{
    price: number;
    getPrice(): string;
}


class Bebida{

    private name: string;

    constructor(name: string){  
        this.name = name;
    }

    info(): string{
        return `El nombre de la bebida es ${this.name}`;
    }

}


class Bebida2 extends Bebida implements Product{

    private sugar: number;
    public price: number;

    constructor(name: string, sugar: number, price: number){  
        super(name);
        this.sugar = sugar;
        this.price = price;
    }
    
    info(): string{
        return super.info() + `, el nivel de azucar es: ${this.sugar}`;
    }

    getPrice(): string{
        return `El precio es ${this.price}`;
    }   

}


class Snack implements Product{
    name: string;
    price: number;

    constructor( name: string,  price: number ){        
        this.name = name;
        this.price = price;
    }
    getPrice(): string{
        return `El precio es ${this.price}`;
    }
}

const bebida1 = new Bebida('Soda');
const bebida2 = new Bebida2('coke', 9.5, 15);
console.log( bebida1.info() );
console.log( bebida2.info() );


const productos: Product[] = [ new Bebida2( 'mutzi', 10, 25 ), new Bebida2( 'power rage', 5, 30 ), new Bebida2( 'hope life', 3, 29 )
    ];


function  getPricesAll(productosList: Product[]){
    productosList.forEach( producto => {
        console.log( producto.getPrice() );
    });
}


getPricesAll( productos );