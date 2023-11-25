# Variable Hoisting
## Description
Explain the output of the following code:
    console.log(a); // Output: undefined
    var a = 5;
    console.log(a); // Output: 5

# Variable Hoisting 2
## Description
Explain the output of the following code:
    console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization
    let a = 5;
    console.log(a); // Output: 5

# Variable Hoisting 3
## Description
Explain the output of the following code:
    console.log(a); // Output: Cannot access 'a' before initialization
    const a = 5;
    console.log(a);

# Function Declaration Hoisting
## Description
Explain the output of the following code:
    greet(); // Output: "Hello, world!"
    function greet() {
    console.log("Hello, world!");
    }

# Function Expression and Hoisting
## Description
Explain the output of the following code:
    greet(); // Output: TypeError (greet is not a function)
    var greet = function () {
    console.log("Hello, world!");
    }