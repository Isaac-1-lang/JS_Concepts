// Object literal
const person = {
    first_Name: "NIYOBYOSE",
    last_Name: "Precieux",
    Age: 15,
    idPerson: function() {
        return `My names are ${this.first_Name} ${this.last_Name}. I am ${this.Age} years`;
    }
};

// Access the idPerson method of the person object
console.log(person.idPerson());
console.log(person.last_Name);
// Constructors
function Person(first_Name,last_Name,Age) {
    this.first_Name = first_Name;
    this.last_Name = last_Name;
    this.Age = Age;
    this.idPerson = function() {
        return `My names are ${first_Name} ${this.last_Name}. I am ${this.Age} years`;
    }
}
// Create instances of Person
const person3 = new Person("BYIRINGIRO","Aloys",15);
const person5 = new Person("NIYONKURU","Darius",23);
console.log(person3)
console.log(person5)
// Classes
class Person_Country {
    // Constructor to initialize properties
    constructor(first_Name,last_Name,Age) {
        this.first_Name = first_Name;
       this.last_Name = last_Name;
       this.Age = Age;
    }
    idPerson() {
        // Method to return the full description
    
        return `My names are ${this.first_Name} ${this.last_Name}. I am ${this.Age}`;
    }
}
const p = new Person_Country("")
// Create instances of Person
const person1 = new Person("NIYOBYOSE", "Precieux", 15);
const person2 = new Person("John", "Doe", 25);

// Call the method for each instance
console.log(person1.idPerson());
console.log(person2.idPerson());
