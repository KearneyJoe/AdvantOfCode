const fs = require("fs");

const data = fs
    .readFileSync("day09.txt", { encoding: "utf-8" })
    .split("\n")

// console.log(data)

let head = { 'x': 0, 'y': 0 }
let tail = { 'x': 0, 'y': 0 }
let tailText = []

for (let i = 0; i < data.length; i++) {
    let command = data[i].split(' ')
    let direction = command[0]
    let numMoves = parseInt(command[1])
    let prevHead
    let newTspot
    if (direction == 'R') {
        for (let i = 0; i < numMoves; i++) {
            prevHead = { 'x': head['x'], 'y': head['y'] }
            head['x'] += 1
            newTspot = moveT(head, tail, prevHead)
            if (newTspot) {
                tail = { 'x': newTspot['x'], 'y': newTspot['y'] }
                tailText.push(`${tail['x']} + ${tail['y']}`)
            }
        }
    } else if (direction == 'L') {
        for (let i = 0; i < numMoves; i++) {
            prevHead = { 'x': head['x'], 'y': head['y'] }
            head['x'] -= 1
            newTspot = moveT(head, tail, prevHead)
            if (newTspot) {
                tail = { 'x': newTspot['x'], 'y': newTspot['y'] }
                tailText.push(`${tail['x']} + ${tail['y']}`)
            }
        }
    } else if (direction == 'U') {
        for (let i = 0; i < numMoves; i++) {
            prevHead = { 'x': head['x'], 'y': head['y'] }
            head['y'] += 1
            newTspot = moveT(head, tail, prevHead)
            if (newTspot) {
                tail = { 'x': newTspot['x'], 'y': newTspot['y'] }
                tailText.push(`${tail['x']} + ${tail['y']}`)
            }
        }
    } else if (direction == 'D') {
        for (let i = 0; i < numMoves; i++) {
            prevHead = { 'x': head['x'], 'y': head['y'] }
            head['y'] -= 1
            newTspot = moveT(head, tail, prevHead)
            if (newTspot) {
                tail = { 'x': newTspot['x'], 'y': newTspot['y'] }
                tailText.push(`${tail['x']} + ${tail['y']}`)
            }
        }
    }
}


function moveT(headSpot, tailSpot, secondToLastHspot) {
    let xDiff = Math.abs(headSpot['x'] - tailSpot['x'])
    let yDiff = Math.abs(headSpot['y'] - tailSpot['y'])

    if (xDiff > 1 || yDiff > 1) {
        return secondToLastHspot
    }
    return false
}

let setTspots = new Set(tailText)
console.log("Part 1: ", setTspots.size + 1) //Part 1: 5710