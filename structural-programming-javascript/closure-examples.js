// What's the output and why?

var b = 100;
const foo = () => {
    b = 200;

    return () => {
        console.log(b);
    }
}

foo()()

// What will the following code output to the console?
// Hint: inner function has access to the outer funtion values even after it finished.

var result = [];

for (var i = 0; i < 5; i++) {
    result[i] = function() {
        return i;
    }
}

console.log(result[0]())

// What will the following code output to the console?

var result2= [];

for (var i = 0; i < 5; i++) {
    result2[i] = (function inner(x) {
        return function() {
            return x
        }
    })(i);
}

console.log(result2[1]())