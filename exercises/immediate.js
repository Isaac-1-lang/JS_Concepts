 // IIFE
 let name1= "NIYOBYOSE";
 console.log(name1);
 (function() {
    console.log("HELOOOOOO");
})();
// HIGH ORDER functions 
let greetingng=function greeting(greets) {
    return " Hello, " + greets;
}
function highOrder(func,name1) {
    func(name1);
}
console.log(highOrder(name1,'Isaac'));