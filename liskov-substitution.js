// Liskov Substitution
// ? A sub-class must be substitutable for its super-class without altering the correctness of the program

// ! this is example of a wrong implementation to Liskov Substitution , with evey sub-class from Animal , we have to build a custom leg-count function for it

class Animal {
    constructor(name) { }
    getAnimalName() { }
}

//...
class Pigeon extends Animal {
        
}
const animals = [
    new Pigeon()
];

//...
function AnimalLegCount(a) {
    for(var i = 0; i <= a.length; i++) {
        if(typeof a[i] == Lion)
            log(LionLegCount(a[i]));
        if(typeof a[i] == Mouse)
            log(MouseLegCount(a[i]));
        if(typeof a[i] == Snake)
            log(SnakeLegCount(a[i]));
    }
}
AnimalLegCount(animals);

// ? this is example of a correct implementation to Liskov Substitution , now evey sub-class from Animal have its own leg-count function and will work fine - without modifying the application codes

class Animal {
    //...
    LegCount();
}

//...
class Pigeon extends Animal{
    //...
    LegCount() {
        //...
    }
}
//...

function AnimalLegCount(a) {
    for(let i = 0; i <= a.length; i++) {
        a[i].LegCount();
    }
}

AnimalLegCount(animals);