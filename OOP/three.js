const person1 = new Object({
    Name: "NIYOBYOSE",
    age:25,
    class: "years 1"
})
person1.prototype.age = 34;
const person2 = person1;
console.log(person2);