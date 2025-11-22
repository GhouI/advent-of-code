import {readFileSync} from 'fs' 

const inputFile = readFileSync('./input', 'utf-8')

function puzzleOne(input : string){
    let currentFloor = 0; //Current Floor Santa is on.
    for(let i = 0; i < input.length; i++){
        // ( goes up a stair and ) down a stair.
        if(input.charAt(i) == '('){ 
            currentFloor += 1
        }else if(input.charAt(i) == ')'){
            currentFloor -= 1
        }
    }
    return currentFloor
}
function puzzleTwo(input: string){
    let currentFloor = 0;
    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) == '('){
            currentFloor += 1
        }else if(input.charAt(i) == ')'){
            currentFloor -= 1
        }
        if(currentFloor == -1){
            console.log("Floor is "+(i + 1)) //we plus one because that is the starting position of santa. 
        }
    }
    return currentFloor
    
}
console.log(puzzleOne(inputFile))
console.log(JSON.stringify(puzzleTwo(inputFile)))