//
let numbers = [20,22,34,5,8,99,40,23];
let filtered = numbers.filter(num => {
   return  num >= 5;
})
let names = ['isaac','precieux','niyobyose','aloys','angello'];
let shortNames = names.filter(name1 => {
    return name1.length <=6;
})
console.log(shortNames)
// Using indices instead of actual values
let OddIndexed = numbers.filter((num,index) => {
   return index % 2 !== 0;
})
console.log(OddIndexed);
integers = []
for(i=1;i<=10;i++) {
 integers.push(i);
}
evenNumbers = integers.filter( numb => {
    return numb % 2 == 0;
})
console.log(evenNumbers)
otherEven = integers.filter((numb,index) => {
    return index % 2 == 0;
})
console.log(evenNumbers)
// Using a function
function useFilter(arr) {
    for(let i=0;i<=10;i++) {
        arr.push(i);
    }
    const odds = arr.filter( numb => {
        return numb % 2 !== 0;
    })
    return odds;
}
const result =  useFilter([]);
console.log(result);
// push
// pop
// unshift
// shift
// splice
const namess = ['Physics','Geography','Literature','Mathematics','Javascript'];
namess.push("History"," ",'WUI');
namess.pop();
namess.unshift("Discpline",'Sport')
namess.shift();
namess.splice(2,0,'ssss','sssssss');
console.log(namess); 
console.log(namess.slice(0,3)); 
// map is used to create a new array by mapping each array component to a given constant.
let namezz = namess.map(secondName => {
    return secondName + " " + "Subject";
})
console.log(namezz);
numbersA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
multiplicationTable  = numbersA.map(n => {
   return n * n
})
console.log("The squared numbers are:");
console.log(multiplicationTable);
// reduce 
const prices = [5,30,10,25,20,30,60,70];
const total = prices.reduce(sum);
function sum(accumulator,element) {
    return accumulator + element
}
console.log(`The total income is ${total.toFixed(2)} Frw `)
const ints = [20,234,670,54,600,2300,2321,1,23,0,-1,2,3];
const maxValue = ints.reduce(maximumNumber);
function maximumNumber(accumulator,element) {
    if(accumulator > element) {
        return accumulator;
    } else {
        return element;
    }
}
console.log(maxValue)
arr2 = [34,50,46,78,100,234,890,1000,326,800];
arr3 = [500,340,231,7,80,560,230,32,2432];
arr4 = arr2.concat(arr3,numbersA);
console.log(arr4);
console.log(arr4.includes(2000));
console.log(arr4.indexOf(230));
arr5 = arr4.find(n => n>30)
console.log(arr5);
