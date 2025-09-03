function isFactorial(number) {
    if(number == 0) {
        return 1;
    } else {
        return number * isFactorial(number-1);
    }
}
let n1= 5;
console.log()