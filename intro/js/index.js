
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