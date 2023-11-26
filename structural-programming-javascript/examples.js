// anonymous function
var myFunc = function(a, b) 
{
    var result = a + b

    return result
}

// named function
function myFunc2(a, b, c, d, e, f)
{
    var result = a + b

    return result
}

// arrow function
var myFunc3 = (a, b) => a + b
var myFunc4 = (a, b) => {
    return a + b
}

function callBackLogic() {
    // console.log("I am running too!")
}

setTimeout(() => {
//  console.log("I am running!")   
}, 200);

setTimeout(callBackLogic, 300);

setTimeout(function() {
    // console.log("I am running too! Too!")
}, 300);

// callback
var saveForm = (name, age, address, callback) => {
    // some magic happens...
    // console.log(`Form was saved!`)

    return callback("www.myblogwebsite.com")
}

saveForm("John", 30, "Downtown", function (url) {
    // console.log(`User was redirect to ${url}`)
})

function go(func, n) {
    return func(n)
}

go(function(a) {
    return a * 5
}, 10)

var a = 1

function x(){
    var b = 2
    // console.log(b)
}

x()
// console.log(a)

// when you have a function defined inside of another function, 
// that inner function has access to the variables and scope of the outer function even if the outer function 
// finishes executing and those variables are no longer accessible outside of that function

var count = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

for (let i = 0; i < 20; i++) console.log(count())

let myName = 'Jonh'

function printName() {
    console.log(myName)
}

printName()

// Pass by reference vs pass by value

var originalVal = 1

function PassedByValue(val) {
    val = 5

    //console.log(val)
}

PassedByValue(originalVal)

//console.log(originalVal)

var obj = {
    originalVal: 1
}

function PassedByReference(objRef) {
    objRef.originalVal = 5

    console.log(objRef.originalVal)
}

PassedByReference(obj)

console.log(obj.originalVal)

// Exercise with Pass By Value
// Description: Create a function that accepts a number as an argument, multiple by 10 and returns the value. 
//              Console log all variables (before & after function is called) + function output.
// Constraints: You must pass a variable to the function.

var originalNum = 10

function Multiple(num) {
    num *= 10
    console.log(num)
    return num
}

Multiple(originalNum)

console.log(originalNum)

// Exercise with Pass By Reference
// Description: Create a object composed by 2 properties (name and age).
//              Create a function that accepts a object and a number as arguments.
//              Function should update age with the number argument.
// Constraint: You must pass an object to the function.

var obj2 = {
    name: 'Aura',
    age: 2
}

function UpdateAge(objRefTwo, newAge) {
    objRefTwo.age = newAge
}

UpdateAge(obj2, 5)

console.log(`Name: ${obj2.name}\nAge: ${obj2.age}`)