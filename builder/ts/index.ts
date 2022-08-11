// Product
class Person{

    private name: string;
    private lastName: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies: string[];

    constructor(name: string, 
        lastName:string, 
        age: number, 
        country: string, 
        city: string, 
        hobbies: string[]){

            this.name= name;
            this.lastName= lastName;
            this.age = age;
            this.country= country;
            this.city = city;
            this.hobbies = hobbies;
    }

    getFullName(): string{
        return this.name + " " + this.lastName;
    }
}

// interface Builder
interface PersonBuilder{
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilder;
    setLastName(lastName: string): PersonBuilder;
    setAge(age: number): PersonBuilder;
    setCountry(country: string): PersonBuilder;
    setCity(city: string): PersonBuilder;
    addHobby(hobby: string): PersonBuilder;
    build(): Person;
}