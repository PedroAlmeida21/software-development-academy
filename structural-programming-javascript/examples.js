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