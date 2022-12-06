const fs = require("fs");

const data = fs
    .readFileSync("day05.txt", { encoding: "utf-8" })
    .split("\n")