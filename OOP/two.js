function Person(fname, lname, gender) {
    this.name = {
        firstName: fname,  // Correct property name
        lastName: lname
    }
    this.gender = gender;
}

const person11 = new Person("NIYOBYOSE", "Precieux", "Male");

// Correctly accessing firstName inside the name object
console.log(person11.name.firstName);  
