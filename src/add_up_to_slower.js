// write a function that calculates the sum of all numbers from 1 up to and including some number n

function addUpToSlow(n){
    let total = 0
    for (let i = 1; i <= n; i++){
        total += i
    }
    return total
}

let t1 = performance.now()
addUpToSlow(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// the best way to calculate performance is by counting the number of operations
// this solution has many operations based on how many times the loop is run
// for the single line total += i, the operations are + and =(assignment) but the amount of times that runs is based on n
// if n = 5, then there are five operations, but if n = 100 then there are 100 operations
// however there are even more operations through the whole function
