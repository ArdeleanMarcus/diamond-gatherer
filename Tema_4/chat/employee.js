import {Person} from './person.js';

export class Employee extends Person{ //Stabilire relatie de mostenire
    constructor(firstName, secoundName, salary, hours, ID){
        super(firstName, secoundName);
        this.salary = salary;
        this.hours = hours;
        this.ID = ID;
    }

    salary_per_month(){
        console.log(`${this.firstName} ${this.secoundName} earns $${this.salary} a month`);
    }

    work_hours(){
        console.log(`${this.firstName} ${this.secoundName} works ${this.hours} hours a day`);
    }

    worker_ID(){
        console.log(`${this.firstName} ${this.secoundName}'s ID is  ${this.ID}`);
    }

}