function sum(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}
let results=sum(12,21);
console.log(results);
// even number
const number=12;
function evenNumber(number1=13) {
    if(number % 2===0) {
        console.log('true');
    } else {
        console.log('false');
    }
}
evenNumber();
// factorial
function numbers(factorial) {
    let results=1;
    for(i=1; i<factorial; i++) {
        results *=i;
    }
     return results;
}
console.log(factorial(12));