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


class Weekdays{
    dayEs = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    dayEn = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    constructor(lang){
        this.lang = lang;

        if(Weekdays.instance){
            return Weekdays.instance
        }

        Weekdays.instance = this;

    }

    getDays(){
        return this.lang  === 'Es' ? this.dayEs : this.dayEn;
    }
}

const Week1 = new Weekdays('Es');
const Week2 = new Weekdays();

console.log(Week1.getDays());
console.log(Week2.getDays());