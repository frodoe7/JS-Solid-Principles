// Open-Closed
// ? A class should be open for extension, not modification.


// ! this is example of a wrong implementation to Open-Closed , to add a new animal , we have to modify makeSound function
class Animal {
    constructor(name) { }
    getAnimalName() { }
}

function makeSound(animal)
{
    if (animal.name == 'Lion')
       console.log('Lion Sound');
    else if (animal.name == 'Dog')
       console.log('Dog Sound');
}

var lion = new Animal("Lion");
var dog = new Animal("Dog");
var cat = new Animal("cat"); // ! to make this work , we have to modify makeSound method


// ? this is example of a correct implementation to Open-Closed , now we can extend Animal class and no need to modify
class Animal {
    makeSound();
    //...
}
class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
}
class Squirrel extends Animal {
    makeSound() {
        return 'squeak';
    }
}

class Snake extends Animal {
    makeSound() {
        return 'hiss';
    }
}

function AnimalSound(a) {
    for (var i = 0; i <= a.length; i++) {
        log(a[i].makeSound());
    }
}
var animals = [new Lion() , new Squirrel() , new Snake()];
AnimalSound(animals);