class SingletonTs{

    private static instance: SingletonTs;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTs{
        if( !this.instance ){
            this.instance = new SingletonTs();
        }
        return this.instance;
    }
}


const newSingleton1 = SingletonTs.getInstance();
const newSingleton2 = SingletonTs.getInstance();

console.log( newSingleton1.random );
console.log( newSingleton2.random );

newSingleton1.random = 7;

console.log( newSingleton1.random );
console.log( newSingleton2.random );