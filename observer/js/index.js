
class Subject{
    constructor(){
        this.observers = [];
    }

    subscribe(){
        this.observers.push();
    }

    unsubscribe(observer){
        this.observers = this.observers.filter( obs => obs !== observer );
    }

    notify(data){
        this.observers.forEach( obs => {
            obs.refresh(data)
        });
    }
}