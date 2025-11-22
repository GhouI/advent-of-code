import {readFileSync} from 'fs' 

const inputFile = readFileSync('./input', 'utf-8')

function puzzleOne(input : string){
    let currentFloor = 0;
    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) == '('){
            currentFloor += 1
        }else if(input.charAt(i) == ')'){
            currentFloor -= 1
        }
    }
    return currentFloor
}
console.log(puzzleOne(inputFile))