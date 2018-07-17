// class defination
// Prototype methods
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get getHeight() {
        return this.height;
    }
}

var rectangle = new Rectangle(10, 10);
console.log(rectangle.getHeight);

// Static methods
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(22, 22);

console.log(Point.distance(p1, p2));

// Sub classing with extends
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(this.name + ' barks.');
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// One may also extend traditional function-based "classes":
function BaseAnimal (name) {
    this.name = name;
}

BaseAnimal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

class Cat extends BaseAnimal {
    speak() {
        console.log(this.name + ' meows.');
    }
}

let c = new Cat('Mitzie');
c.speak(); // Mitzie meows.