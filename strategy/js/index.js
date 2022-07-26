class SalesContext {

    constructor( strategy ){
        this.strategy = strategy;
    }

    calculate( amount ){
        return this.strategy.calculate(amount);
    }

}


class RegularSalesStrategy{
    constructor( tax ){
        this.tax = tax;
    }

    calculate(amount){
        return amount + ( amount * this.tax )
    }
}


const regularSale = new RegularSalesStrategy(0.16)

const sale = new SalesContext(regularSale);


console.log(sale.calculate( 18 ));