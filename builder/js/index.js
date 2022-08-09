class Person{
    constructor(name, lastName, age, country, city, hobbies){
        this.name= name;
        this.lastName= lastName;
        this.age = age;
        this.country= country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(){
        return this.name + " " + this.lastName;
    }
}


