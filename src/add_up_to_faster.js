// write a function that calculates the sum of all numbers from 1 up to and including some number n

function addUpToFast(n){
    return n * (n + 1) / 2
}

let time1 = performance.now()
addUpToFast(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// the best way to calculate performance is by counting the number of operations
// this solution only has three operations
// the operations are *, +, and /