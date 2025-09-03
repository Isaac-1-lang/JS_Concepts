// function to reverse a string
function Original_string(sentence) {
    if(sentence.includes(' ')) {
     return sentence.split(' ').reverse().join(' ');
    } else {
        return sentence.split('').reverse().join('');
    }
}
console.log(Original_string("Isaac"));
console.log(Original_string("Isaac Newton is one of the physics'scientists."));
console.log(Original_string("Today we\'ll study javascript."));
console.log(Original_string("Tomorrow we\'ll come across again."));
