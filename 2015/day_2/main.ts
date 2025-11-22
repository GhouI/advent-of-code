import {readFileSync}from "fs"

const input = readFileSync("input", "utf-8")

function puzzleOne(){
    const parseDimension = input.split('\n').slice()
    console.log(parseDimension)
}
puzzleOne()