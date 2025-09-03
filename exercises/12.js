// Object Oriented programming
// Encapsulation
// Procedular Oriented programming
const base_Salary = 30000;
let overTime = 10;
let rate = 20;
function grossSalary(base_Salary,overTime,rate) {
    return base_Salary  + (overTime * rate);
}
console.log("Your gross Salary is " + "$"+ grossSalary(base_Salary,overTime,rate))
// This is what we call object oriented programming 
let employee = {
    base_Salary : 30000,
    overTime : 10,
    rate : 20,
    grossSalary:function() {
        return this.base_Salary + (this.overTime * this.rate)
    }
};
console.log("Your gross Salary is " + "$"+ employee.grossSalary())
const circle = {
    radius: 10,
    diameter:20,
    x:10,
    y:3,
    z:2,
    draw:function() {
        return this.radius**2 * 3.142
    }
}

console.log(`The area of ${circle.radius} is ${circle.draw()} centimeters squared`)
// Use of factories to perform the same task Ex1
// It is also showing the abstraction
function calcArea(diameter) {
    return {
        diameter,
        position: {
            x:3,
            y:2,
        },
        calculate:function() {
          return (this.diameter/2)**2 * 3.142
        }
    }
}
let area = calcArea(10)
console.log(area.calculate())
// Ex2
function person(name,age) {
    return {
        name,
        age,
        greet:function() {
            return `Hi my name is ${this.name}, I am ${this.age}`
        }
    }
}
let person1 = person("Isaac",23);
let person2 = person("Precieux",34)
console.log(person1.greet());
console.log(person2.greet())
// Use of constructor function where new objects are created.
function Person(name, age) {
    this.name = name; // Assign name property
    this.age = age;   // Assign age property
}

// Add the greet method to the prototype
Person.prototype.greet = function () {
    return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
};

// Create instances
let personally = new Person("Isaac", 23);
let personally1 = new Person("Precieux", 34);

// Call the greet method
console.log(personally.greet()); // Hi, my name is Isaac, and I am 23 years old.
console.log(personally1.greet()); // Hi, my name is Precieux, and I am 34 years old.
// prototype
let number = {value : 12};
let n =number;
number['value'] +=1;
console.log(number)
console.log(n);
let obj = {
    names:'Isaac Precieux',
    title:'student',
    level:'year 1',
    career:'software_enginnering',
}
obj.names = 'Niyobyose_Isaac';
// console.log(obj);
for(let key in obj) {
    console.log(`${key}:${obj[key]}`)
}
const keys = Object.keys(obj);
console.log(keys);
// Another example to illustrate abstraction
function carFunctioning() {
    return {
        start() {
            console.log("The car is moving");
        },
        stop() {
            console.log("The car stops")
        },
        drive() {
            console.log("You can drive")
        }
    }
}
const output = carFunctioning();
output.drive();
output.start();
// setters and getters in object oriented programming  is a way of creating private and more controlled variables or properties in order to access them easily
function createArea(diameter) {
    let _diameter  = diameter; // Private variable
    return {
        get diameter() {
            return _diameter;
        },
        set diameter(newDiameter) {
            _diameter = newDiameter;
        },
        calculate:function() {
            return (this.diameter /2)**2 * 3.142;
        }
    };
} 
let circle_Area = createArea(10);
console.log(`The area is ${circle_Area.calculate()} cm squared`);
// Explanation of setters and getters with the use of classes
class UserProfile {
    constructor(name, age) {
        this.name = name;
        this._age = age;  // Private age
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (newAge > 0 && newAge <= 120) { // Assuming realistic age limits
            this._age = newAge;
        } else {
            console.log("Invalid age. Age must be between 1 and 120.");
        }
    }
}

// Example usage
let user = new UserProfile("Alice", 25);
console.log(user.age); // 25

// Attempt to set an invalid age
let user1 = user.age = -5; // Invalid age. Age must be between 1 and 120.
console.log(user1);
user.age = 30; // Valid age
console.log(user.age); // The ages'output
// function to add all the numbers from 1 to 20
function Addition(sum) {
    for(i=1;i<=20;i++) {
       sum+=i;
    }
    return sum;
}
let result = Addition(0);
console.log(`The sum is ${result}`);
// Working with var,const and let in creating variables
// Redeclaration and re-assignment with var are possible at any overTime
//console.log(x)// output:undefined because of hoisting
var x=20;
var x = 30;
// With let only re-assignment is possible but not Redeclaration
//console.log(v)// With let the out will be reference error  as it is placed in temporal dead zone(TDZ)
let v= 20;
//let v =30; // Syntax console.error();
v=40;
// With const NONE OF re-assignment AND Redeclaration is possible, but re-assignment can work on reference data types like objects and arrays
const animal = {
    skin: 'fur',
    color: 'black',
    names: 'cow',
    feed:'grass',
}
animal.color = 'red'
animal['location']= 'Kigali city';
for(let key in animal) {
    console.log(`${key}:${animal[key]}`);
}
// Asynchrous and synchronous of the functions is conflicted or 
// triggered with the use of var as it is not a block scoped based variable creation
// Example
for(var i=4;i<=5;i++) {
    setTimeout(function(){
        console.log(i);
    },0.1);
}
// hoisting is possible with function declaration but not with function expression
console.log(product(20,21));
function product(x,y) {
    return x * y;
}
// null,undefined,symbol,bigint,number,strings They are primitive data types as
// they are used to keep a single value at a time
console.log(typeof(3));
console.log(typeof('Isaac'));
console.log(typeof(true))
console.log(typeof(2/67088980989788987898789889))
console.log(typeof(product()));
console.log(typeof(23n));
let today = new Date();
console.log(today);
// String and arrays methods
let names = 'Niyobyose Isaac';
let upperCase  = names.replace('Niyobyose','Precieux');
let lowe = upperCase.toLowerCase();// parentheses are very crucial in order 
// to take that strings.
let uppere = names.toUpperCase();
console.log(uppere);
console.log(lowe);
console.log(lowe.length);
let concatenation = lowe.concat(" ",uppere);
console.log(concatenation);
let name1 = 'Isaac'
let slicing = name1.slice(0,3)
console.log(slicing);
// strings are immutable,have operations,sequence of characters
// Let's move on to the arrays
let numbers = [20,21,22,23,24,25,26];
// We use for of to print the actual numbers in an array and use for in to get the indices
for(number of numbers) {
    console.log(number);
}
numbers.push(12,11,15,13)
numbers.unshift(18,19);
numbers.splice(3,0,12,13,14,15,16,17)
for(number in numbers) {
    console.log(`${number}:${numbers[number]}`);
}
let multiplication = numbers.map(n => {
    return n * 2;
});
console.log(multiplication);
let prod= numbers.map(n => {
    console.log( n * 2 );
});
let integers = [];
function evens() {
    for(let i=1;i<=100;i++) {
        if(i % 2==0) {
            integers.push(i);// Push array's method must always be having the an argument
        }
    }
}

evens();
let result2 = integers.map(n => {
    return n * 1;
})
console.log(result2);
let age = 30;
console.log(age > 20 ? 'You are allowed to vote': 'Not allowed');
// left shift is used to double the current number when one bit is used
console.log(5<<4);
console.log(5>>1);
let _1st  ='Niyobyose';
let $1st = 'Precieux';
let $2nd = 'Isaac';
// Arrow functions always go with unnamed functions(annymous functions);
let ArrowFunction = (names) => {
    return `Hi, ${names} !`;
}
console.log(ArrowFunction('Isaac'));
// Switch cases
let day = 'Tuesday';
switch(day) {
        case('Monday'):
        console.log(`It is on ${day}.`);
    break;
        case('Tuesday'):
        console.log(`It is on ${day}.`);
    break;
    case('Wednesday'):
        console.log(`It is on ${day}.`);
        break;
    case('Thursday'):
        console.log(`It is on ${day}.`);
        break;
    case('Friday'):
        console.log(`It is on ${day}.`);
        break;
    default:
        console.log(`The day called ${day} is not found.`);
}
// function to check if a number is even or not
function isEven(number) {
    return number % 2===0;
}
//console.log(isEven(23));
// Prime
function isEven(number) {
    if (number <= 1) {
        return `${number} is not Prime`;
    }
    if (number === 2) {
        return `${number} is Prime`;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} is not Prime`;
        }
    }

    return `${number} is Prime`;
}

console.log(isEven(10099923)); // Output: 10099923 is not Prime
// To find the factorial of a number
function factorialNumber(number,factorial) {
    for(i=1;i<=number;i++) {
        factorial*=i;
    }
    return `The factorial of ${number} is ${factorial}`;
}
console.log(factorialNumber(7,1));
function reversedString(originalString) {
    return originalString.split('').reverse().join('').toLowerCase();
}
console.log(reversedString('Isaac'));
console.log(reversedString('Precieux'));
console.log(reversedString('Ivan'));
console.log(reversedString('Gaby'));
// Array and find the largest number
function maxNumber(...numbers) {
    let largest = number[0];
    for(i=0;i<numbers.length;i++) {
        if(numbers[i]> largest) {
            largest = numbers[i];
        }
    }
    return `The largest number is ${largest}` ;
}
console.log(maxNumber(20,21,22,23,90,120,300,500,100,3,50));

