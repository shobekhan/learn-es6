var x = 0, y = 0;
obj = { x, y };
console.log(obj);

function quux() {
    return 'something';
}

let obj1 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
};

console.log(obj1);

//Functions Definitions
var obj = {
    foo() {
        return 'bar';
    }
}

console.log(obj.foo());

// Generator methods
// Using a named property
var obj2 = {
    * g() {
        var index = 0;
        while (true)
            yield index++;
    }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2

// supports different syntax
var bar = {
    foo0: function() { return 0; },
    foo1() { return 1; },
    ['foo' + 2]() { return 2; }
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2