// Part 1 - Create a class for vehichle

class Vehichle{
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep';
    }

    toString(){
        return `The vehichle is ${this.make} ${this.model} from ${this.year}.`;
    }
}

//Part Two - Create a class for Car


class Car extends Vehichle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

//Part 3 - Create a class called Motorcycle

class Motorcycle extends Vehichle {
    constructor(make, model, year)  {
        super(make,model,year)
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

//Part 4 - Create a Garage Class

class Garage {
    constructor(size){
        this.vehichles = [];
        this.capacity = size;
    }
    add(mv){
        if (!(newVehicle instanceof Vehichle)) {
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehichles.length >= this.capacity){
            return "Sorry, we're full."
        } else {
            this.vehichles.push(mv)
        }
    }
}
