const fs = require("fs");

const data = fs
    .readFileSync("day04.txt", { encoding: "utf-8" })
    .split("\n")

//Part 1
//How many pairs completely contain the other section
let count = 0
for (let i = 0; i < data.length; i++) {
    let vals = data[i].split(',')
    let leftSet = vals[0].split('-')
    let rightSet = vals[1].split('-')
    if (parseInt(leftSet[0]) >= parseInt(rightSet[0]) && parseInt(leftSet[1]) <= parseInt(rightSet[1])) {
        count++
    } else if (parseInt(rightSet[0]) >= parseInt(leftSet[0]) && parseInt(rightSet[1]) <= parseInt(leftSet[1])) {
        count++
    }

}
console.log(count) //Part 1: 588

//Part 2
//Find any pair that overlaps at all
count = 0
for (let i = 0; i < data.length; i++) {
    let vals = data[i].split(',')
    let leftSet = vals[0].split('-')
    let rightSet = vals[1].split('-')
    if (parseInt(leftSet[0]) >= parseInt(rightSet[0]) && parseInt(leftSet[0]) <= parseInt(rightSet[1])) {
        count++
    } else if (parseInt(rightSet[0]) >= parseInt(leftSet[0]) && parseInt(rightSet[0]) <= parseInt(leftSet[1])) {
        count++
    }
}
console.log(count) //Part 2: 911