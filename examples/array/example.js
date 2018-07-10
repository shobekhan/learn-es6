// feature 1 - Array Matching
var list = [ 1, 2, 3 ];
var [ a, , b ] = list; // puts value 1 in variable a and 3 in variable b
console.log(a);
console.log(b);

// feature 2 - Array Matching
[ b, a ] = [ a, b ]; // exchanges the value from a to b and b to a
console.log(a);
console.log(b);

// feature 3 - Object Matching, Shorthand Notation
var tmp = () => {
    return {op: 100, lhs: 200, rhs: 300};
};
var { op, lhs, rhs } = tmp();
console.log(op); // 100
console.log(lhs); // 200
console.log(rhs); // 300

// feature 4 - Object Matching, Deep Matching
var tmp1 = () => {
    return {op: 100, lhs: {op: 200}, rhs: 300};
};
var { op: a, lhs: { op: b }, rhs: c } = tmp1()
console.log(a); // 100
console.log(b); // 200
console.log(c); // 300

// feature 5 - Object And Array Matching, Default Values
var obj = { a: 1 };
var list = [ 2 ];
var { a, b = 3 } = obj;
var [ x, y = 7 ] = list;
console.log(`${a} ${b}`);
console.log(`${x} ${y}`);

// feature 6 - Parameter Context Matching
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })