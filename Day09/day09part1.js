const fs = require("fs");

const data = fs
    .readFileSync("day09.txt", { encoding: "utf-8" })
    .split("\n")

// console.log(data)

let head = [{ 'x': 0, 'y': 0 }]
let tail = [{ 'x': 0, 'y': 0 }]
let tailText = ['0 + 0']

for (let i = 0; i < data.length; i++) {
    let command = data[i].split(' ')
    let direction = command[0]
    let numMoves = parseInt(command[1])
    let lastHspot
    let lastTspot
    let newTspot
    let secondToLastHspot
    if (direction == 'R') {
        for (let i = 0; i < numMoves; i++) {
            lastHspot = head[head.length - 1]
            lastTspot = tail[tail.length - 1]
            head.push({
                'x': lastHspot['x'] + 1, 'y': lastHspot['y']
            })
            lastHspot = head[head.length - 1]
            secondToLastHspot = head[head.length - 2]
            //helper function to move T if needed
            newTspot = moveT(lastHspot, lastTspot, secondToLastHspot)
            if (newTspot) {
                tail.push(newTspot)
                tailText.push(`${newTspot['x']} + ${newTspot['y']}`)
            }
        }
    } else if (direction == 'L') {
        for (let i = 0; i < numMoves; i++) {
            lastHspot = head[head.length - 1]
            lastTspot = tail[tail.length - 1]
            head.push({
                'x': lastHspot['x'] - 1, 'y': lastHspot['y']
            })
            lastHspot = head[head.length - 1]
            secondToLastHspot = head[head.length - 2]
            //helper function to move T if needed
            newTspot = moveT(lastHspot, lastTspot, secondToLastHspot)
            if (newTspot) {
                tail.push(newTspot)
                tailText.push(`${newTspot['x']} + ${newTspot['y']}`)
            }
        }
    } else if (direction == 'U') {
        for (let i = 0; i < numMoves; i++) {
            lastHspot = head[head.length - 1]
            lastTspot = tail[tail.length - 1]
            head.push({
                'x': lastHspot['x'], 'y': lastHspot['y'] + 1
            })
            lastHspot = head[head.length - 1]
            secondToLastHspot = head[head.length - 2]
            //helper function to move T if needed
            newTspot = moveT(lastHspot, lastTspot, secondToLastHspot)
            if (newTspot) {
                tail.push(newTspot)
                tailText.push(`${newTspot['x']} + ${newTspot['y']}`)
            }
        }
    } else if (direction == 'D') {
        for (let i = 0; i < numMoves; i++) {
            lastHspot = head[head.length - 1]
            lastTspot = tail[tail.length - 1]
            head.push({
                'x': lastHspot['x'], 'y': lastHspot['y'] - 1
            })
            lastHspot = head[head.length - 1]
            secondToLastHspot = head[head.length - 2]
            //helper function to move T if needed
            newTspot = moveT(lastHspot, lastTspot, secondToLastHspot)
            if (newTspot) {
                tail.push(newTspot)
                tailText.push(`${newTspot['x']} + ${newTspot['y']}`)
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
console.log("Part 1: ", setTspots.size) //Part 1: 5710