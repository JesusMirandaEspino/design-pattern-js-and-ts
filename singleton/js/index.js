class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor(){
        this.ramdon = Math.random();
        if(Singleton.instance){
            return Singleton.instance
        }
        Singleton.instance = this;
    }
}


const singleton1 = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log( singleton1.ramdon );
console.log( singleton2.ramdon );
console.log( singleton3.ramdon );

console.log( singleton1.ramdon === singleton2.ramdon );