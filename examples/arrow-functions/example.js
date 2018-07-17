/**
 * Arrow functions has 2 advantages
 * 1) shorter syntax
 * 2) No binding of this
 */

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material =>
    {
        return material + ' ' + material.length + ' letters';
    }
));

// function with parameters
var a = (value1, value2) => {
    return value1 * value2;
};

console.log(a(2, 2));

// function without parameters
var a = () => {return 'Hello world with arrow'};
console.log(a());

// When you only have one parameter, the opening parenthesis are optional:
var a = value => {return value * value};
console.log(a(8));

// without return keyword
var a = value => value + ' number';
console.log(a(8));

// No binding of this
function counter() {
    this.num = 0;

    // can access this.num
    this.timer = setInterval( () => {
        this.num++;
        console.log(this.num);
    }, 1000);

    // cannot access this.num
    this.timerOld = setInterval(function add() {
        this.num++;
        console.log(this.num);
    }, 1000);
}

var b = new counter();

setInterval( () => {
    clearInterval(b.timer);
    clearInterval(b.timerOld);
}, 4000);

