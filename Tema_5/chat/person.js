export class Person {
    constructor(firstName, secoundName, liters){
        this.firstName = firstName;
        this.secoundName = secoundName;
        this.liters = liters;
    }

    drink(){
        console.log(`${this.firstName} ${this.secoundName} drinks ${this.liters} of water a day`);
    }
}