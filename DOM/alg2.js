function twoStrings(str1,str2) {
   // let conc = str1 + str2;
 let minLenght = (str1 < str2) ? str1.length: str2.length;
 return str1.slice(0,minLenght) + " " + str2.slice(0,minLenght);
}
console.log(twoStrings("Isaac","NIYO"));
const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function sentence(plainText, key) {
    let decryptedText = '';

    for (let char of plainText) {
        if (alphabets.includes(char)) {
            let isUpper = char === char.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let index = (char.charCodeAt(0) - base - key) % 26;
            decryptedText += String.fromCharCode(base + index);
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;
}

// Example usage
console.log(sentence("Hello World!", 3));  // output
console.log(sentence("ISAAC precieux NIYOBYOSE",3));
console.log(sentence('NIYONKURU DARIUS',3));
console.log(sentence('ISHIMWE DAVID',3));
console.log(sentence('mugisha ivan bright',3));
console.log(sentence('Pxnxqgzd Obglh Pxebhbl suhflhxvh',3));
