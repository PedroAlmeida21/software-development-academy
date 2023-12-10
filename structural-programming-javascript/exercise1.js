/*
    Create an object: a car. It has some properties: the brand, the model, the start price, the end price, the age. 
    Write some functions which operate on this object:

    A constructor function which creates a Car object and fills it with some initial data.
    A function, which counts the end price, by decreasing the start price by 1000 for every year of the car's age.
    A function, increasing the start price by a given value.
    A function, checking whether the end price is in the given range.
    A function, copying the object (so that we have two similar cars, not just one).
*/


function Car(brand, model, startPrice, age) {
    this.brand = brand
    this.model = model
    this.startPrice = startPrice
    this.endPrice = startPrice
    this.age = age

    this.countPrice = function() {
        this.endPrice = this.startPrice - (1000 * age)
    }

    this.increasePrice = function(price) {
        if (price >= 0) this.startPrice += price
    }

    this.isInRange = function(start, end) {
        if (start <= this.endPrice <= end) return true
        else return false
    }

    this.copy = function() {
        return new Car(this.brand, this.model, this.startPrice, this.age)
    }
}

var auto = new Car("ford","ka",50000,10);

auto.countPrice();
console.log(auto.endPrice); //40000 (the start price - 1000 for each year)

auto.increasePrice(5000);
console.log(auto.startPrice); //55000 (the start price has risen by a given value)

console.log(auto.isInRange(20000,60000)); //"no" (the end price does not fit the given range)

var auto2 = auto.copy();

console.log(auto2.brand)