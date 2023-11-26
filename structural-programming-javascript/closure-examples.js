// What's the output and why?

var b = 100;
const foo = () => {
    b = 200;

    return () => {
        //console.log(b);
    }
}

var aux = foo() // call outer function which returns me a new function
aux() // call inner funciton

// What will the following code output to the console?
// Hint: inner function has access to the outer funtion values even after it finished.

// try with named function

/*
    Iteration 1: i = 0
    Iteration 2: i = 1
    Iteration 3: i = 2
    Iteration 4: i = 3
    Iteration 5: i = 4
    Iteration 6: i = 5 -> i >= 5 and for loop breaks
*/
// for (var i = 0; i < 5; i++) {
//     result[i] = function() {
//         return i;
//     }
// }

// function test() {
//     var result = []

//     for (var i = 0; i < 5; i++) {
//         result[i] = function() {
//             return i;
//         }
//     }

//     return result
// }

// var aux = Test();

// for (var i = 0; i < 5; i++) {
//     console.log(aux[i]())
// }

// at this point i = 5

// for (var j = 0; j < 5; j++) {
//     console.log(result[j]())
// }

// at this point i = 5

// for (var i = 0; i < 5; i++) { // I redeclare and assign a new value to variable i. New value starts from 0
//     console.log(result[i]())
// }

// console.log(result[1]())

// What will the following code output to the console?

var result2= [];

 for (var i = 0; i < 5; i++) {
    result2[i] = (function inner(x) {
        return function() {
            return x
        }
    })(i);
}

for (var i = 0; i < 5; i++) {
    //console.log(result2[i]())
}

