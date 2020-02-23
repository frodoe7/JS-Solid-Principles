"use strict"

// Single Responsibility
// ? A class should have only one job.

// ! This is example of a wrong implemetation to Single Responsibility , as it do more than one job
class Animal {
    constructor(name){ }
    getAnimalName() { }
    saveAnimal(a) { }
}

// ? This is example of a correct Single Responsibility , each class only do one job
class Animal {
    constructor(name){ }
    getAnimalName() { }
}
class AnimalDB {
    getAnimal(a) { }
    saveAnimal(a) { }
}
