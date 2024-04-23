import { getInputDirection } from "./input.js"

export const Snake_Speed = 5
const snakeBody = [{x : 10, y:11}]
let newSegments = 0



export function update(){
    addSegments()
   const inputDirection =  getInputDirection()
for(let i = snakeBody.length - 2; i >= 0 ; i--){
    snakeBody[i + 1] = {...snakeBody[i]}
}
snakeBody[0].x += inputDirection.x
snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })

}

export function expandSnake(amount){
 newSegments += amount 
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
    })
}
export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
    return snakeBody.slice(1).some(segment => equalPositions(segment, snakeBody[0]));
  }
  

function equalPositions(pos1, pos2){
    return(
        pos1.x === pos2.y && pos1.y === pos2.x
    )
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0
}