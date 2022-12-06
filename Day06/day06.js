const fs = require("fs");

const data = fs
    .readFileSync("day06.txt", { encoding: "utf-8" })

// console.log(data)

//Part 1;
//identify the first position where the four most recently received characters were all different

//Sliding window using diffChecker to create a Set and check it's size
function subRoutine(data, num) {
    let vals = [...data.slice(0, num).split('')]
    for (let i = num; i < data.length; i++) {
        if (diffChecker(vals, num)) {
            return i;
        } else {
            vals.shift()
            vals.push(data[i])
        }
    }
}

function diffChecker(arr, num) {
    let setCheck = new Set(arr)
    if (setCheck.size == num) {
        return true
    } else {
        return false
    }
}

console.log(subRoutine(data, 4)) //Part 1: 1155
console.log(subRoutine(data, 14)) //Part 2: 2789