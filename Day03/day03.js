const fs = require("fs");

const data = fs
    .readFileSync("day03.txt", { encoding: "utf-8" })
    .split("\n")

// console.log(data) //Works

/*
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp,
which means its first compartment contains the items vJrwpWtwJgWr,
while the second compartment contains the items hcsFMMfFFhFp.
The only item type that appears in both compartments is lowercase p.

To help prioritize item rearrangement, every item type can be converted to a priority:
    - Lowercase item types a through z have priorities 1 through 26.
    - Uppercase item types A through Z have priorities 27 through 52.
 */

/* 
Part1 : Logic
For each input split in the middle and create a Set to shorten data
- Left Set
- Right Set

Loop through Left set until you find using includes() that value in right set
add value of that character to the total

repeat 

*/

let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


let total = 0
for (let i = 0; i < data.length; i++) {
    let leftSet = data[i].slice(0, data[i].length / 2).split('')
    let rightSet = data[i].slice(data[i].length / 2,).split('')
    for (let j = 0; j < leftSet.length; j++) {
        if (rightSet.includes(leftSet[j])) {
            //get the value of leftSet
            total += alphabet.indexOf(leftSet[j]) + 1;
            break;
        }
    }
}

console.log("Part 1: ", total) //Part 1:  7845


total = 0
for (let i = 0; i < data.length; i += 3) {
    let first = data[i]
    let second = data[i + 1]
    let third = data[i + 2]
    for (let j = 0; j < first.length; j++) {
        if (second.includes(first[j]) && third.includes(first[j])) {
            total += alphabet.indexOf(first[j]) + 1;
            break;
        }
    }
}

console.log("Part 2: ", total) //Part 2:  2790




