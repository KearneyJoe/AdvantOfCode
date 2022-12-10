const fs = require("fs");

const data = fs
    .readFileSync("dummy.txt", { encoding: "utf-8" })
    .split("\n")

// console.log(data)