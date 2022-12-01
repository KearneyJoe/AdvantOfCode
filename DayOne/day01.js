const fs = require("fs");

const data = fs
    .readFileSync("day01.txt", { encoding: "utf-8" })
    .split("\n")
    .map((x) => parseInt(x));

//PART 1: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
let max = 0
let subTotal = 0

for (let i = 0; i < data.length; i++) {
    if (data[i]) {
        subTotal += data[i]
    } else {
        if (subTotal > max) {
            max = subTotal
        }
        subTotal = 0
    }
}

console.log("Part 1: ", max) // PART 1 answer: 72240

//PART 2: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
let max1 = 0
let max2 = 0
let max3 = 0

subTotal = 0
for (let i = 0; i <= data.length; i++) {
    if (!data[i] || !data[i]) {
        if (subTotal >= max1) {
            max3 = max2
            max2 = max1
            max1 = subTotal
        } else if (subTotal >= max2) {
            max3 = max2
            max2 = subTotal
        } else if (subTotal > max3) {
            max3 = subTotal
        }
        subTotal = 0
    } else {
        subTotal += data[i]
    }
}



console.log("Part 2: ", max1 + max2 + max3) //Part 2 answer: 210957 
