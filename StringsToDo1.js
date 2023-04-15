// remove blanks - create a function that, given a string, returns all of that string’s contents, but without blanks. 
var string = "I Have Fun With Algos";
function removeBlanks(string) {
    let noBlanks = '';
    for(let i = 0; i < string.length; i++) {
        if (string[i] !== ''){
            noBlanks += str[i];
        }
    }
    return noBlanks;
}

// get digits - create a JavaScript function that given a string, returns the integer made from the string’s digits.
function getDigits(string) {
    let numStr = '';
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(Number(string[i]))) {
            numStr += string[i];
        }
    }
    const numInt = Number(numStr);
    return numInt;
}

// acronyms - create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
function acronym(string) {
    const words = string.split('  ');
    let acronym = '';
    for(let i = 0; i < words.length; i++) {
        const w = words[i];
        if (w.length > 0) {
            acronym += w[0].toUpperCase();
        }
    }
    return acronym;
}

// count non-spaces - create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(string) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (string[i] !== ' '){
            count++;
        }
    }
    return count;
}

// remove shorter strings - create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr, minLength) {
    const newArray = arr.filter(str => str.length >= minLength);
    return newArray;
}