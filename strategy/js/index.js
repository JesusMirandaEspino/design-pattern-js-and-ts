class SalesContext {

    constructor( strategy ){
        this.strategy = strategy;
    }

    getStrategy(strategy){
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


class DiscountSaleStrategy{
    constructor( tax, discount ){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return (amount + ( amount * this.tax )) - this.discount;
    }
}


class ForeingSaleStrategy{

    getDollar(){
        return 20;
    }

    calculate(amount){
        return amount * this.getDollar();
    }
}

const regularSale = new RegularSalesStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16,3);
const  foreingSale = new ForeingSaleStrategy();

const sale1 = new SalesContext(regularSale);
const sale2 = new SalesContext(discountSale);



console.log(sale1.calculate( 18 ));
console.log(sale2.calculate( 18 ));

sale2.getStrategy(foreingSale);


console.log(sale2.calculate( 18 ));
