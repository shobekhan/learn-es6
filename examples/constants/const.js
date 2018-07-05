const PI = 3.141593;

// point 1)
// cannot change constant value
try {
    PI = 99;
} catch(err) {
    console.log(err.toString());
}

console.log(PI);


// point 2)
// it's important to note the nature of block scoping
if (PI === 3.141593) {
    // this is fine and creates a block scoped MY_FAV variable
    // (works equally well with let to declare a block scoped non const variable)
    let PI = 4;

    // PI is now 4
    console.log('PI ' + PI);

    // point 3)
    // this gets hoisted into the global context and throws an error
    // var PI = 20;
}

// throws an error - Uncaught SyntaxError: Missing initializer in const declaration
// const FOO;

// point 4)
// const also works on objects
const MY_OBJECT = {'key': 'value'};

// point 5)
// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
try {
    MY_OBJECT = {'OTHER_KEY': 'value'};
} catch (e) {
    console.log('Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.');
}

// Point 6)
// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable
console.log(MY_OBJECT);

// Point 7)
// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]

// Point 8)
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
try {
    MY_ARRAY = ['B'];
} catch (e) {
    console.log('assigning a new array to the variable throws an error');
}