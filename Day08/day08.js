const fs = require("fs");

const data = fs
    .readFileSync("day08.txt", { encoding: "utf-8" })
    .split("\n")

let rowData = []
for (let row of data) {
    let rowVals = row.split('')
    let temp = []
    for (let char of rowVals) {
        temp.push(parseInt(char))
    }
    rowData.push(temp)
}

function visibleTrees(arr) {
    let seenTrees = []
    for (let row = 1; row < arr.length - 1; row++) {
        let leftMax = arr[row][0]
        for (let col = 1; col < arr[row].length - 1; col++) {
            if (arr[row][col] > leftMax) {
                leftMax = arr[row][col]
                seenTrees.push(`${row} + ${col}`)
            }
        }

        let rightMax = arr[row][arr[row].length - 1]
        for (let col = arr[row].length - 2; col > 0; col--) {
            if (arr[row][col] > rightMax) {
                rightMax = arr[row][col]
                seenTrees.push(`${row} + ${col}`)
            }
        }

    }

    for (let col = 1; col < arr.length - 1; col++) {
        let topMax = arr[0][col]
        for (let row = 1; row < arr[col].length - 1; row++) {

            if (arr[row][col] > topMax) {
                topMax = arr[row][col]
                seenTrees.push(`${row} + ${col}`)
            }
        }

        let bottomMax = arr[arr.length - 1][col]
        for (let row = arr.length - 2; row > 0; row--) {
            if (arr[row][col] > bottomMax) {
                bottomMax = arr[row][col]
                seenTrees.push(`${row} + ${col}`)
            }
        }
    }
    let tree = new Set(seenTrees)
    let totalVis = tree.size + (arr.length * 2) + (arr[0].length * 2) - 4 // 
    return totalVis
}

console.log("Part 1: ", visibleTrees(rowData)) //Part 1: 1789


function visibleDist(arr) {
    let scenicScore = 0;
    let indexes = [0, 0]
    for (let row = 1; row < arr.length - 2; row++) {
        for (let col = 1; col < arr[row].length - 2; col++) {
            let score = treeSearch(arr, row, col)
            if (score > scenicScore) {
                scenicScore = score
                indexes = [row, col]
            }
        }
    }
    return scenicScore
}

console.log("Part 2: ", visibleDist(rowData)) //Part 2: 314820

function treeSearch(arr, rowIdx, colIdx) {
    let leftScore = 0
    let rightScore = 0
    let aboveScore = 0
    let belowScore = 0

    for (let col = colIdx + 1; col < arr[rowIdx].length; col++) {
        if (arr[rowIdx][colIdx] > arr[rowIdx][col]) {
            rightScore += 1
        } else if (arr[rowIdx][colIdx] == arr[rowIdx][col]) {
            rightScore += 1
            break
        } else {
            break
        }
    }

    for (let col = colIdx - 1; col >= 0; col--) {
        if (arr[rowIdx][colIdx] > arr[rowIdx][col]) {
            leftScore += 1
        } else if (arr[rowIdx][colIdx] == arr[rowIdx][col]) {
            leftScore += 1
            break
        } else {
            break
        }
    }

    for (let row = rowIdx + 1; row < arr.length; row++) {
        if (arr[rowIdx][colIdx] > arr[row][colIdx]) {
            belowScore += 1
        } else if (arr[rowIdx][colIdx] == arr[row][colIdx]) {
            belowScore += 1
            break
        } else {
            break
        }
    }

    for (let row = rowIdx - 1; row >= 0; row--) {
        if (arr[rowIdx][colIdx] > arr[row][colIdx]) {
            aboveScore += 1
        } else if (arr[rowIdx][colIdx] == arr[row][colIdx]) {
            aboveScore += 1
            break
        } else {
            break
        }
    }
    let score = rightScore * leftScore * aboveScore * belowScore
    return score
}