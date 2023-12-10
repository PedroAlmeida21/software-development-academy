/*
    Create 3 anonymous functions, each of them should only write a message in the console ("more than zero" / "equal to zero" / "less than zero").
    Write a program, calling one of those 3 functions, when a condition is met (the value of some variable is more than zero / equal to zero / less than zero).
*/

// Anonymous functions
var moreThanZero = function() {
    console.log("more than zero")
}
var equalToZero = function() {
    console.log("equal to zero")
}
var lessThanZero = function() {
    console.log("less than zero")
}

// Random number (positive and negative)
var num = Math.floor(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1)
console.log(num)

// Condition + invoke function
if (num > 0) {
    (function() {
        console.log("more than zero")
    })()
}
else if (num < 0) lessThanZero()
else equalToZero()