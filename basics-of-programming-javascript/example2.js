function Algorithm(a, b) {    
    let x = 1;
    
    while (x < b) {
        a = a * a;
        x = x + 1;
    }

    return a;
}

// Function shouldn't run if X or Y are negative
function Algorithm2(x, y) {
    if (x || y < 0) return 0;

    let result = y;

    if (x > y) result = x

    for (i = 0; i < 10; i++) console.log(`Some magic happening here ${aux4}... Hold on!`)

    return result;
}


// console.log(`Result: ${Algorithm(2, 0)}`)

// let aux0 = "text"
// let aux1 = 123
// let aux2 = aux1 == 12
// let aux3 = [1, 2, 3]
// let aux4 = {
//     prop1: 15,
//     prop2: "text"
// }

// let aux5 = null
// let aux6 = dadasd + 10
// let aux7 = undefined

// console.log(typeof aux0)

let test1 = 1
let test2 = 1

if (test1 === test2) {
    console.log("First is correct!")
}

if (test1 == test2) {
    console.log("Second is correct!")
}

/*
    if ( PUT YOUR CONDITION HERE ) {
        YOUR LOGIC WILL BE TRIGGERED IF CONDITION IS TRUE!
    }
    else if ( PUT YOUR CONDITION HERE ) {
        YOUR LOGIC WILL BE TRIGGERED IF CONDITION IS TRUE!
    }
    else {
        YOUR LOGIC WILL BE TRIGGERED IF NONE OF THE CONDITIONS ARE TRUE
    }
*/

// let aux10 = aux1 == aux2 ? "if it's true, return this" 
//                          : "if it's false, return this"

// switch(true) { //do something, depending on value of a
//     case a < 2:
//         //if true == (a < 2), do something...
//     break;
//     case 2:
//         //if a == 2, do something else...
//     break;
//     default:
//         //otherwise, do something different...
//     break;
// }

/*
    Description: Function gets 2 parameters
                 Returns first parameter + second parameter
*/
function CalculateSum(param1, param2) {
    let aux1 = param1 + param2

    return aux1
}

console.log(`Sum: ${CalculateSum(10, 12)}`)

let aux = "Text"

console.log(aux.includes)

/*
    If you want to call a function, 
    you must type the name of the function and follow by round brackets -> ()
*/

/*
    for, while, do while, [foreach, extra]
*/

//  ( initialization ; limitation ; iteration )
for (let i = 0; i < 100; i = i + 1) {
    console.log(`i value = ${i}`)
}

let arr = [1, 2, 3, 4]

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j])
}

let obj = {
    prop1: 1,
    prop2: 2,
    func1: function () {
        return "test"
    }
}

console.log(obj.func1())
console.log(obj.prop1)