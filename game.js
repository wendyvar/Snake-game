import {update as updateSnake,draw as drawSnake,Snake_Speed, getSnakeHead, snakeIntersection} from './snake.js'
import{update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game_board')

function main(currentTime){
    if(gameOver){
        if(confirm('Je hebt verloren, druk OK om opnieuw te starten')){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / Snake_Speed) return
    
    lastRenderTime = currentTime
    

update()
draw()

}


window.requestAnimationFrame(main)

function update(){
updateSnake()
updateFood()
checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
drawSnake(gameBoard)
drawFood(gameBoard)

}
function checkDeath(){
    
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}