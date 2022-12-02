const fs = require("fs");

const data = fs
    .readFileSync("day02.txt", { encoding: "utf-8" })
    .split("\n")

/*
Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock 
A for Rock, B for Paper, and C for Scissors
X for Rock, Y for Paper, and Z for Scissors

A > X -> Rock defeats Scissors
C > Y -> Scissors defeats Paper
B > X -> Paper defeats Rock

Total score is the sum of your scores for each round. 
The score for a single round is the score for the shape you selected 
    (1 for Rock, 2 for Paper, and 3 for Scissors) 
plus the score for the outcome of the round 
    (0 if you lost, 3 if the round was a draw, and 6 if you won)
*/

/* 
Part 1 Logic: 
choose Rock (X) +1
    - A +3 
    - B +0
    - C +6

choose Paper (Y) +2
    - A +6
    - B +3
    - C +0

choose Scissors (Z) +3
    - A +0
    - B +6
    - C +3
*/

let scoreTotal = 0
for (let i = 0; i < data.length; i++) {
    if (data[i][2] == 'X') {
        scoreTotal += 1
        if (data[i][0] == 'A') {
            scoreTotal += 3
        } else if (data[i][0] == 'B') {
            scoreTotal += 0
        } else if (data[i][0] == 'C') {
            scoreTotal += 6
        }
    } else if (data[i][2] == 'Y') {
        scoreTotal += 2
        if (data[i][0] == 'A') {
            scoreTotal += 6
        } else if (data[i][0] == 'B') {
            scoreTotal += 3
        } else if (data[i][0] == 'C') {
            scoreTotal += 0
        }
    } else if (data[i][2] == 'Z') {
        scoreTotal += 3
        if (data[i][0] == 'A') {
            scoreTotal += 0
        } else if (data[i][0] == 'B') {
            scoreTotal += 6
        } else if (data[i][0] == 'C') {
            scoreTotal += 3
        }
    }
}

console.log("Part 1: ", scoreTotal) //Part 2 answer: 12794


/*
Part 2 Update:
X means you need to lose
Y means you need to end the round in a draw
Z means you need to win */

/* 
Part 2 Logic: 
A for Rock, B for Paper, and C for Scissors

X Win +0
    - A +3 (Scissors)
    - B +1 (Rock)
    - C +2 (Paper)

Y Draw +3
    - A +1 (Rock)
    - B +2 (Paper)
    - C +3 (Scissors)

Z Lose +6
    - A +2 (Paper)
    - B +3 (Scissors)
    - C +1 (Rock)
*/

scoreTotal = 0
for (let i = 0; i < data.length; i++) {
    if (data[i][2] == 'X') {
        scoreTotal += 0
        if (data[i][0] == 'A') {
            scoreTotal += 3
        } else if (data[i][0] == 'B') {
            scoreTotal += 1
        } else if (data[i][0] == 'C') {
            scoreTotal += 2
        }
    } else if (data[i][2] == 'Y') {
        scoreTotal += 3
        if (data[i][0] == 'A') {
            scoreTotal += 1
        } else if (data[i][0] == 'B') {
            scoreTotal += 2
        } else if (data[i][0] == 'C') {
            scoreTotal += 3
        }
    } else if (data[i][2] == 'Z') {
        scoreTotal += 6
        if (data[i][0] == 'A') {
            scoreTotal += 2
        } else if (data[i][0] == 'B') {
            scoreTotal += 3
        } else if (data[i][0] == 'C') {
            scoreTotal += 1
        }
    }
}

console.log("Part 2: ", scoreTotal) //Part 2 answer: 14979