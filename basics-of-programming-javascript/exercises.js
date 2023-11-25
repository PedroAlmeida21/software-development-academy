// Exercise 5
function Exercise5(input) {
    // Verify if input data type is string
    // Allow logic to continue only and ONLY if it's 'string'
    if (typeof input !== 'string') return -1
    
    let result = 0

    for (let i = 0; i < input.length; i++) {
        result++
    } 

    return result
}

console.log(`Exercise 5 result: ${Exercise5("123")}`)

// Exercise 6
// let Exercise6 = (input) => Math.max(input)

function Exercise6(input) {
    if (input.length == 0) return null

    let maxValue = input[0]

    for (let i = 1; i < input.length; i++) {
        if (maxValue < input[i]) maxValue = input[i]
    }

    return maxValue
}


console.log(`Exercise 6 result: ${Exercise6([])}`)