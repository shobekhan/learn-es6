// Default parameter
function f (x, y = 9, z = 40) {
    return x + y + z
}
console.log(f(1) === 50);

// RestParameter
// If the last named parameter of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.
/**
 * Difference between rest parameters and the arguments object
 * rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
 * the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
 * the arguments object has additional functionality specific to itself (like the callee property).
 * Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments
 */
/**
 * @param x
 * @param y
 * @param a
 * @returns {number}
 */
function restParameter (x, y, ...a) {
    //console.log(a[0]);
    return (x + y) * a.length
}
console.log(restParameter(1, 2, "hello", true, 7) === 9);

// RestParameter and its difference to arguments object
function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
        console.log(multiplier);
        return multiplier * element;
    });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);

// sort will work
function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

// this wont work
function sortArguments() {
    var sortedArgs = arguments.sort();
    return sortedArgs; // this will never happen
}

try {
    console.log(sortArguments(5, 3, 7, 1));
} catch (e) {
    console.log('This wont work');
}

// In order to use Array methods on the arguments object, it must be converted to a real array first.

function sortArgumentsWithConversion() {
    var args = Array.from(arguments);
    var sortedArgs = args.sort();
    return sortedArgs;
}
console.log(sortArgumentsWithConversion(5, 3, 7, 1)); // 1, 3, 5, 7

// Spread syntax
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));