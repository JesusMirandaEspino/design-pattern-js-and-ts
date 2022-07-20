
// Funcion de primer orden
function sum( a, b ){
    return a + b;
}

let res = sum( 1,2 );
console.log( res );

const fSuma = sum;
res = fSuma(5, 6);
console.log(res);

// Funcion de orden superior
function superior(fn, a, b){
    console.log('Hace algo');
    console.log(fn(a,b));
}

superior( sum, 10, 20 );


// Arrow function
superior( (a,b)=>a*b, 10, 20 );
superior( (a,b)=>{
    let c = a + b;
    return c * 2;
}, 10, 20 );

const names = ['Jesus', 'Miriam', 'Ramiro', 'Geralt'];
names.forEach( name=>console.log( name ) );
names.forEach( name=>console.log( name.toUpperCase() ) );
console.log(names);
names.sort();
console.log(names);


// map
const namesUpper = names.map( name => name.toUpperCase() );
console.log(namesUpper);

// reduce
const numeros = [1,2,3,4,5,6,7,8,9];
const total = numeros.reduce( (acum, numero)=>acum+numero, 0 );
console.log(total);



// clases
class Drink {

    constructor(name){
        this.name = name;
    }

    info(){
        return `La bebida es ${this.name}`;
    }
}


// Funcional
function Drink2(name){
    this.name = name;
    this.info = function(){
        return `La bebida es ${this.name}`;
    }
}

const drink1 = new Drink('agua');
const drink2 = new Drink2('agua');

console.log(drink1.info());
console.log(drink2.info());


// Herencia
class Coke extends Drink{
    constructor( name, sugar ){
        super(name);
        this.sugar = sugar;
    }

    info(){
        return super.info() + `, mas  ${this.sugar} de azucar`;
    }

}

const drink3 = new Coke('water love', 9.5);
console.log( drink3.info() );

