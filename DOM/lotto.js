function sum(...arr) {
    return arr[0] + arr[1];
}
console.log(sum(20,3002,30,4,30))
// We use rest arguments in order to enable it to accept many numbers.
// Find the fibonnacci numbers and add the even ones
function fibonnacci(limit) {
    let a = 0;
    let b = 1;
    let sum= 0;
    while(b < limit) {
        if(b % 2 === 0) { // Here u can use either a or b depending on what u want.
            sum +=b;
        }
        let next = a+b;
        a = b;
        b = next;
    }
    return sum;
}
console.log(` The sum of fibonnacci even numbers is:${fibonnacci(4000000)}`);
function fibOdds(limit) {
    a = 0;
    b = 1;
    addition = 0;
    while(a<limit) {
        if(a % 2 == 1) {
            addition+=a;
        }
        let next = a + b;
        a = b;
        b = next
    }
    return addition;
}
console.log(`The sum of odd fibonnacci series is: ${fibOdds(4000000)}`)
function fibonnacciGen(limit) {
  let  a = 0;
  let  b = 1;
  let series = [a,b];
  let next;
    // console.log(a,b);
    while(true) {
        next = a+b;
       if(next > limit) break;
       series.push(next);
       a = b;
       b = next;
    }
    return series.join(",")

   
    
}
console.log(`The fibonnacci series is  ${fibonnacciGen(40000)}`)
// Check if a number is prime or not
function isPrime(number) {
    if(number <= 1) {
        return `The ${number} is not Prime`;
    } else {
        for(let i=2;i<=Math.sqrt(number);i++) {
            if(number % i == 0 ) {
                return `The ${number} is not Prime`;
            } 
        }
        return `The ${number} is Prime`
    }
}

console.log(isPrime(18));
console.log(isPrime(189));
console.log(isPrime(18934));
console.log(isPrime(18912));
console.log(isPrime(18987));
console.log(isPrime(18976357));
// To generate prime numbers in a given range
let initial;
let end;
function primes(initial,end) {
    let primeNumbers = [];
    for(let i=initial;i<=end;i++) {
        isPrime = true;// Assuming a number is prime..
        for(let z=2;z<Math.sqrt(i);z++) {
            if(i % z == 0) {
                isPrime = false;// then if the condition is false and a numbers in not prime.
                break;
            }
        } 
        if(isPrime && i>1) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers.join(", ")
}
console.log(`The prime numbers from ${initial} to ${end} is ${primes(100,400)}`);
// finding the squareroot of a number with Newton's method.
function sqrt(N) {
    if(N < 0) {
        return "The input must be positive";
    }
    let guess = N/2;
    let epsilon = 0.00000001;

    while(Math.abs(guess * guess - N) > epsilon) {
        guess = (guess + N /guess) / 2;
    }
    return guess;
}
console.log(sqrt(36))
console.log(sqrt(121))
console.log(sqrt(144))
console.log(sqrt(625))
