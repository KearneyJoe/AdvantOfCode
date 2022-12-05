const fs = require("fs");

const data = fs
    .readFileSync("day05.txt", { encoding: "utf-8" })
    .split("\n")

let blankLineIdx = data.indexOf('')
let cargoStack = data.slice(0, blankLineIdx)
let cargoDirections = data.slice(blankLineIdx,)

/*
//CREATE THIS DATA STRUCTURE
{
    1: [Z,N],
    2: [M, C, D],
    3: [P]
}
*/

let cargoObj = {} // store the data above
let stackNumbers = cargoStack[cargoStack.length - 1].split('') // number of keys in cargoObj
// Add a key in cargoObj for each stack number with an empty array
for (let i = 1; i < stackNumbers.length; i += 4) {
    let num = parseInt(stackNumbers[i])
    cargoObj[num] = []
}

// Loop through each row of stack data
// slice off each "block" and add to the corresponding cargoObj key
// Always start with stack number 1
let stackValues = cargoStack.slice(0, cargoStack.length - 1)
console.log("Stack Values: ", stackValues)

for (let i = 0; i < stackValues.length; i++) {
    let raw = stackValues[i]
    let stackNum = 1
    for (let j = 0; j < raw.length; j += 4) {
        let block = raw.slice(j, j + 3).trim()
        if (block.length) {
            cargoObj[stackNum].unshift(block)
        }
        stackNum++
    }
}

//Make a deep copy for part 2
let cargoObj2 = JSON.parse(JSON.stringify(cargoObj))

//Loop through cargo directions
//Grag the number of moves and to and from
//Pop each element off back of the array and move
for (let i = 1; i < cargoDirections.length; i++) {
    let directions = cargoDirections[i].split(" ")
    let numMoves = directions[1]
    let moveFrom = directions[3]
    let moveTo = directions[5]
    let moveCounter = 1
    while (moveCounter <= numMoves) {
        let blockVal = cargoObj[moveFrom].pop()
        cargoObj[moveTo].push(blockVal)
        moveCounter++
    }
}

//Loop through and get the last value in each array
let part1Ans = []
for (const [key, value] of Object.entries(cargoObj)) {
    part1Ans.push(value[value.length - 1])
}

//remove the [brackets] to get the final message
console.log("Part 1: ", part1Ans.join('').replace(/\W/g, "")) //Part 1: DHBJQJCCW


//PART 2: Groups of blocks can move at the same time thereby changing the order
for (let i = 1; i < cargoDirections.length; i++) {
    let directions = cargoDirections[i].split(" ")
    let numMoves = directions[1]
    let moveFrom = directions[3]
    let moveTo = directions[5]
    let moveCounter = 1
    let moveBlock = []
    while (moveCounter <= numMoves) {
        moveBlock.unshift(cargoObj2[moveFrom].pop())
        // let blockVal = cargoObj[moveFrom].pop()
        // cargoObj[moveTo].push(blockVal)
        moveCounter++
    }
    cargoObj2[moveTo].push(...moveBlock)
}


let part2Ans = []
for (const [key, value] of Object.entries(cargoObj2)) {
    part2Ans.push(value[value.length - 1])
}
console.log("Part 2: ", part2Ans.join('').replace(/\W/g, "")) //Part 2: WJVRLSJJT