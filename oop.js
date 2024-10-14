//classes structure
/*
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }
}

//objects classes k instances hote hain
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.brand);
myCar.drive(); 
*/
//constructors,objects ko initialize krty hain

// Defining the Car class
/*class Car {
    constructor(brand, model, year) {
        this.brand = brand;  // Initializing brand property
        this.model = model;  // Initializing model property
        this.year = year;    // Initializing year property
    }

    // Method to display car details
    displayDetails() {
        console.log(`Car Details: ${this.year} ${this.brand} ${this.model}`);
    }
}

// Creating instances of the Car class (initializing objects)
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2021);
const car3 = new Car('Ford', 'Mustang', 2019);

// Using the displayDetails method on the objects
car1.displayDetails(); // Output: Car Details: 2020 Toyota Corolla
car2.displayDetails(); // Output: Car Details: 2021 Honda Civic
car3.displayDetails(); // Output: Car Details: 2019 Ford Mustang
*/
//4.methods
// Defining the Car class
/*class Car {
    constructor(brand, model, year) {
        this.brand = brand;  // Initializing brand property
        this.model = model;  // Initializing model property
        this.year = year;    // Initializing year property
    }

    // Method to drive the car
    drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }

    // Method to stop the car
    stop() {
        console.log(`The ${this.brand} ${this.model} has stopped.`);
    }

    // Method to display car details
    displayDetails() {
        console.log(`Car Details: ${this.year} ${this.brand} ${this.model}`);
    }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);

// Using the methods to define behavior
myCar.displayDetails(); // Output: Car Details: 2020 Toyota Corolla
myCar.drive();          // Output: The Toyota Corolla is driving.
myCar.stop();           // Output: The Toyota Corolla has stopped.
*/
//5 Parent class,inheritance
/*
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;  // Initializing brand property
        this.model = model;  // Initializing model property
    }

    start() {
        console.log(`The ${this.brand} ${this.model} is starting.`);
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    constructor(brand, model, year) {
        super(brand, model); // Call the parent constructor
        this.year = year;    // Initializing year property
    }

    // Overriding the start method
    start() {
        console.log(`The car ${this.brand} ${this.model} from ${this.year} is starting.`);
    }

    drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }
}

// Child class inheriting from Vehicle
class Bike extends Vehicle {
    constructor(brand, model) {
        super(brand, model); // Call the parent constructor
    }

    ride() {
        console.log(`The ${this.brand} ${this.model} is riding.`);
    }
}

// Creating instances of Car and Bike
const myCar = new Car('Toyota', 'Corolla', 2020);
const myBike = new Bike('Yamaha', 'YZF-R3');

// Using methods from the parent class and overridden methods
myCar.start(); // Output: The car Toyota Corolla from 2020 is starting.
myCar.drive(); // Output: The Toyota Corolla is driving.

myBike.start(); // Output: The Yamaha YZF-R3 is starting.
myBike.ride();  // Output: The Yamaha YZF-R3 is riding.

*/

//

// Parent class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }
}

// Subclass ElectricCar
class ElectricCar extends Car {
    drive() {
        console.log(`The electric ${this.brand} ${this.model} is driving silently.`);
    }
}

// Subclass SportsCar
class SportsCar extends Car {
    drive() {
        console.log(`The sporty ${this.brand} ${this.model} zooms down the road.`);
    }
}

// Function to demonstrate polymorphism
function testDrive(car) {
    car.drive(); // Calls the drive method based on the object type
}

// Creating instances of Car, ElectricCar, and SportsCar
const myCar = new Car('Toyota', 'Corolla');
const myElectricCar = new ElectricCar('Tesla', 'Model S');
const mySportsCar = new SportsCar('Ferrari', '488');

// Using the testDrive function to demonstrate polymorphism
testDrive(myCar);           // Output: The Toyota Corolla is driving.
testDrive(myElectricCar);   // Output: The electric Tesla Model S is driving silently.
testDrive(mySportsCar);     // Output: The sporty Ferrari 488 zooms down the road.

