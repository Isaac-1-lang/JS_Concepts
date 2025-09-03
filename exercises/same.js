function add(n) {
    return function sum(p) {
        return n + p;
    }
}
let addend1=add(12);
console.log(addend1(2));
let addend2=add(101);
console.log(addend2(20));
let addend3=add(121);
console.log(addend3(20));
let addend4=add(1211);
console.log(addend4(20));