function getSentence(sentence) {
    let vowels = ['a','i','e','u','o','A','I','E','U','O'];
    let sorting = sentence.split('').filter(n => !vowels.includes(n));
    return sorting.join('');
}
let output = getSentence('NIYOBYOSE ISAAC precieux');
console.log(output);
// including something in your array.



function squareDigits(num) {
    // Convert the number to a string and process each digit
    let squared = num
        .toString() // Convert the number to a string
        .split('') // Split into individual characters
        .map(n => n ** 2) // Square each digit
        .join(''); // Join back into a single string

    // Return as a number
    return parseInt(squared, 10);
}

// Example usage
console.log(squareDigits(340)); // Output: 9160
console.log(squareDigits(123)); // Output: 149