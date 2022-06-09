function addUpToFast(n){
    return n * (n + 1) / 2
}

let time1 = performance.now()
addUpToFast(1000000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)