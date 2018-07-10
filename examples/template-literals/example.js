// old way
console.log('string text line 1\n' +
    'string text line 2');

// new way
console.log(`string text line 1
string text line 2`);

// old way
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// new way
console.log(`Fifteen is ${a + b} and 
not ${2 * a + b}.`);

// Tagged templates
var person = 'Manu';
var age = 28;

// Tagged templates example
function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "
    var str2 = strings[2]; // " from Berlin"
    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

var output = myTag`That ${ person } is a ${ age } from Berlin`;

console.log(output);

function template(strings, ...keys) {
    return (function(...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];

        console.log(keys);
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            if (typeof value === 'object') {
                console.log(value);
            }
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"

var t2Closure = template`${0} ${1} ${'year'}!`;
var currentTime = new Date();
console.log(t2Closure('Hello', 'World', {year: currentTime.getFullYear()}));

// Raw strings
function tag(strings) {
    console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;