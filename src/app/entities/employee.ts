import { Department } from './department';

export class Employee {
    
    private firstName: string;
    private lastName: string;
    private gender: string;
    private dob: string;
    private department: Department;


    get FirstName(): string {
        return this.firstName;
    }    
    set FirstName(firstName: string) {
        console.log(firstName);
        this.firstName = firstName;
    }

    get LastName(): string {
        return this.lastName;
    }
    set LastName(lastName: string) {
        console.log(lastName);
        this.lastName = lastName;
    }

    get Gender(): string {
        return this.gender;
    }
    set Gender(gender: string) {
        console.log(gender);
        this.gender = gender;
    }

    get Dob(): string {
        return this.dob;
    }
    set Dob(dob: string) {
        console.log(dob);
        this.dob = dob;
    }
    get Department(): Department {
        return this.department;
    }
    set Department(department: Department) {
        this.department = department;
    }
}