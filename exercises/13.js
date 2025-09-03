// First class function
function factorialOf(num) {
    if(num === 1 || num === 0) {
        return 1;
    } else {
        return num * factorialOf(num-1);
    }
}
console.log(factorialOf(4));
// Higher-order functions these are functions that can take other functions and take them as their arguments or return them as values;
// Examples:
function Addto(num) {
    return function Addto(addend) {
        return num + addend;
    }
}
let double=Addto(23);
console.log(double(20));
