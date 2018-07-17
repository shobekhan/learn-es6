/**
 An object is an iterator when it knows how to access items from a collection one at a time, while keeping track of its current position within that sequence. In JavaScript an iterator is an object that provides a next() method which returns the next item in the sequence. This method returns an object with two properties: done and value.

 An iterator is considered to be finished/terminated when next() calls return an object with the done property set to true.

 Once created, an iterator object can be used explicitly by repeatedly calling next().

 */

function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    };
}

var it = makeIterator(['yo', 'ya']);
var next = it.next();

// in loop
while (next.done !== true) {
    console.log(next.value);
    next = it.next();
}

// or individually
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

// get reference to an iterator "[Symbol.iterator]()"
var data = ['1', '2'];
const iter = data[Symbol.iterator]();
for (v of iter) {
    console.log(v); // 1 2
}

// Generators
function *foo() {
    yield 1
    yield 2
    yield 3
}

// Generators iterate individually
const iterNext = foo();
console.log(iterNext.next()); // {value: 1, done: false}
console.log(iterNext.next()); // {value: 2, done: false}
console.log(iterNext.next()); // {value: 3, done: false}

// Generators iterate loop
const iterFor = foo();
for(v of iterFor){
    console.log(v) // 1 2 3
}

// example of fibonacci
console.log( 'FibGen' );
var FibGen = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 1;
        return function* fib () {
            var current = n2;
            n2 = n1;
            n1 = n1 + current;
            yield current;
            yield* fib();
        }();
    }
}
for (var v of FibGen) {
    console.log( v );
    if(v > 100) break;
}