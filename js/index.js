// GAME CONSTANTS AND VARIABLES
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3')
let score=0;
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food={ x: 6, y: 7 };

// GAME FUNCTIONS
function main(ctime,) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(sarr){
    return false;
}

function gameEngine() {
    // Part 1: Updating Ssnake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={ x: 0, y: 0 };
        alert("Gameover\n"+"Press Any Key to Play Again");
        snakeArr= [{ x: 13, y: 15 }];
        // food={ x: 6, y: 7 };
        musicSound.play();
        let score=0;
    }
    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        
    }
    // Part 2: Display the snake & food
    // Displaying the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0)
        snakeElement.classList.add('head');
        else
            snakeElement.classList.add('snake');
        // ^ this will add snake css style to it
        board.appendChild(snakeElement);

    })
    // Displaying the food
   foodElement = document.createElement('div');
   foodElement.style.gridRowStart = food.y;
   foodElement.style.gridColumnStart = food.x;
   foodElement.classList.add('food');
   board.appendChild(foodElement);

}


// MAIN LOGIC
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}
    // start the game ^
    moveSound.play()
    switch(e.key){
        case "ArrowUP":
                console.log("ArrowUP");
                inputDir.x=0;
                inputDir.y=-1;
                break;

        case "ArrowDOWN":
                console.log("ArrowDOWN");
                inputDir.x=0;
                inputDir.y=1;
                break;               
        case "ArrowLEFT":
                console.log("ArrowLEFT");
                inputDir.x=-1;
                inputDir.y=0;
                break;
        case "ArrowRIGHT":
                console.log("ArrowRIGHT");
                inputDir.x=1;
                inputDir.y=0;
                break;
        default:
                break;
    }
});