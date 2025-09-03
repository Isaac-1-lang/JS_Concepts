//Showing a constructor function, Constructor is a method used to create instances of a constructor
function Person(fname,lname,age,job) {
    this.first_Name = fname
    this.last_Name = lname,// Use this to show that it is the actual constructor
    this.age = age,
    this.Job = job
    this.greeting = function() {
        return `Hi my name is ${this.first_Name} ${this.last_Name}. With ${this.age} years old.`;
    }
}
// Using object literals
const person5 =  {
    lname: "BABABABABABABABAABABABABAB",
    fname: "Mugagagagagagagaggagagga",
    age:  36787686768767868687678,
  greeting:function() {
  return `Hi my name is ${this.fname} ${this.lname}. With ${this.age} years old.`;
  }
}
person5.lname = "NIYOBYOSE TOGETHER";
//const person5 = Person4("BABABABABABABABAABABABABAB","Mugagagagagagagaggagagga",36787686768767868687678,"Software enginnering");
console.log(person5.greeting());
const person1 = new Person("NIYOBYOSE","Precieux",12);
const person2 = new Person("Byiringiro","Aloys",23);
console.log(person1.greeting());
console.log(person2.greeting());
// Javascript Object Notation to make objects
function Person1(fname,lname,age,job) {
    this.names = {
        first_Name: fname,
        last_Name : lname
    },// Use this to show that it is the actual constructor
    this.age = age,
    this.Job = job
    this.greeting = function() {
        return `Hi my name is ${this.names.first_Name} ${this.names.last_Name}. With ${this.age} years old.`;
    }
}
const person3 = new Person1("Valentine","Uwamariya",92);
const person4 = new Person1("Rugamba","Sipiriyani",63);
console.log(person3.greeting());
console.log(person4.greeting());
// Using create.Object() KEYWORD
// Create a prototype to work as a blueprint 
const PersonPrototype = {
    greeting: function() {
        return `Hi my name is ${this.fname} ${this.lname}. I am ${this.age} years old and work as a ${this.job}.`;
    },
    updateInfo: function(newFname,newlName,newAge,newJob) {
        this.fname = newFname;
        this.lname = newlName;
        this.age = newAge;
        this.newJob = newJob;
    }
};
// Create a new object using PersonPrototype object
const person6 = Object.create(PersonPrototype);
person6.fname = "NIMUGABO";
person6.lname = "Mugabo";
person6.age = 56758657;
person6.job = "Engineering";
console.log(person6.greeting());
person6.updateInfo("UHIRIWE","Chrisostom",56,"Murindahabi");
console.log(person6.greeting());
// prototypes in Javascript
String.prototype.Booping = () => {
    console.log("The cow is making too much noise");
}
String.prototype.Booping();
const mice = "Ki";
// mice.Boop();

console.log(Object.getOwnPropertyNames(mice.__proto__));
console.log(Object.getOwnPropertyNames(mice));
console.log(Object.getOwnPropertyNames(Array.prototype));


