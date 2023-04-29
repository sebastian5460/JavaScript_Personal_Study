const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

const up = document.getElementById('up');
const left = document.getElementById('left');
const rigth = document.getElementById('rigth');
const down = document.getElementById('down');
const Drawlives = document.querySelector('#lives');
const DrawTime = document.querySelector('#time');

let sizeCanvas;
let elementSize;
let stage = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInerval;




let limitCanvas = {};

const playerPosition = {

    x: undefined,
    y: undefined
    
}

let gift_position = {
    x: undefined,
    y: undefined
};

let colision_Map = [];



window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


function startGame(){

    // let screenWidth = window.innerWidth;
    // let screenHeight = window.innerHeight;
    
    

    game.font = elementSize + 'px Verdana';
    // game.textAlign = 'end'
    


    colision_Map = [];

    let map = maps[stage];

    if(!map){
        GameFinished();
        return;
    }

    if(!timeStart){

        timeStart = Date.now();
        timeInerval = setInterval(showTime, 100);
        
    }
    

    let mapRow = map.trim().split("\n");

    let contentRow = mapRow.map(element => element.trim().split(''));

    showLives();
    
    for(let col = 0; col < 10; col++){
        
        for(let row = 1; row <= 10; row ++){

            
            let fig = contentRow[row-1][col];
            let X_Position = (col*elementSize + 8);
            let Y_Position = (row*elementSize);
            game.fillText(emojis[fig], X_Position, Y_Position);


            if(fig === 'X'){
                colision_Map.push({
                    x: X_Position,
                    y: Y_Position
                });
            }

            if(fig === 'I'){

                gift_position.x = X_Position;
                gift_position.y = Y_Position;
                
            }


            if(playerPosition.x == undefined && fig == 'O'){
                playerPosition.x = X_Position;
                playerPosition.y = Y_Position
                console.log({playerPosition});
            }
            
            
            
        }
        
    }

    
    console.log(colision_Map);
    // fillMap();

    // console.log('Limit Canvas: ',limitCanvas);

    // console.log(playerPosition.x, playerPosition.y);

    movePlayer();
    
}

function GameFinished(){

    console.log('You have win!! Congratulations');
    clearInterval(timeInerval);
    
    const record_time = localStorage.getItem('record_time');
    const playerTime = Date.now() - timeStart;

    if(record_time){
        if(record_time >= playerTime){
            localStorage.setItem('record_time', playerTime);
            console.log('Record superado');
        }else{
            console.log('Record no superado')
        }
    } else {
        localStorage.setItem('record_time', playerTime);
    }
    console.log({record_time, playerTime});
    
}

function Colision(){

    lives--;

    if(lives <= 0){

        stage = 0;
        lives = 3;
        timeStart = undefined;
    }
    
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    setCanvasSize();
    startGame();
    
}

function showLives(){

    const hearts = Array(lives).fill(emojis['HEART']);

    Drawlives.innerHTML = "";
    hearts.forEach(heart => Drawlives.append(heart));


    
}

function movePlayer(){

    
    // draw player
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);



    const enemyColision = colision_Map.find( element => {

        const enemyPosX = (element.x).toFixed(3) == (playerPosition.x).toFixed(3);
        const enemyPosY = (element.y).toFixed(3) == (playerPosition.y).toFixed(3);

        return enemyPosX && enemyPosY;
        
    })

    console.log();

    if(enemyColision){
        console.log('Colision!!');
        Colision();
    }




    // Detect if player arrived to the goal
    if((playerPosition.x).toFixed(3) == (gift_position.x).toFixed(3) && (playerPosition.y).toFixed(3) == (gift_position.y).toFixed(3)){

        if(stage <= 3){

            stage++;
            setCanvasSize();
            startGame();

        }else{
            setCanvasSize();
            startGame();
        }
    }

    
}




function setCanvasSize(){
    
    
    if(window.innerHeight > window.innerWidth){
        
        sizeCanvas = window.innerWidth * 0.8;
        
    }else sizeCanvas = window.innerHeight * 0.8;

    canvas.setAttribute('width', sizeCanvas);
    canvas.setAttribute('height', sizeCanvas);
    
    elementSize = sizeCanvas/10.2;
    
    startGame();
    
}


function showTime(){

    const time_msec = Date.now() - timeStart;
    DrawTime.innerHTML = timeFormat(time_msec);

    
}


function timeFormat(time_msec){

    const time = Math.floor(time_msec / 1000);
    const min = (time/60) | 0;
    const sec = time - (min * 60);
    const msec = ((time_msec / 10 | 0) - (time * 100));

    return min + ':'+((sec < 10 ? '0':0)+sec) +':'+((msec < 10 ? '0':0)+msec);
    
}




up.addEventListener('click', printU);
left.addEventListener('click', printL);
rigth.addEventListener('click', printR);
down.addEventListener('click', printD);

window.addEventListener('keydown', keyPressed);

function keyPressed(event){
    // console.log(event);
    if(event.key == 'ArrowUp'){

        // Controlling the upper limit movement
        if(((playerPosition.y).toFixed(3)) <= elementSize){
            setCanvasSize();
            movePlayer();
            // console.log('Up pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas, 'element: ',elementSize);
        }else{
            playerPosition.y -= elementSize;
            setCanvasSize();
            movePlayer();
            // console.log('Up pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas, 'element: ',elementSize);
        }
    }else if(event.key == 'ArrowDown'){
        // Controlling the lower limit movement
        if((playerPosition.y + elementSize) > elementSize*10.2 ){
            setCanvasSize();
            movePlayer();
            // console.log('Down pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas, 'element: ',elementSize);
        }else{

            playerPosition.y += elementSize;
            setCanvasSize();
            movePlayer();
            // console.log('Down pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas, 'element: ',elementSize);
        }
    }else if(event.key == 'ArrowRight'){

        // console.log('Right pos: ',playerPosition.y, playerPosition.x);
        // console.log('sizecanvas: ',sizeCanvas);
        // console.log('elementsize:' ,elementSize);

        // Controlling the right limit movement
        if((playerPosition.x) > (elementSize*9)){
            setCanvasSize();
            movePlayer();
            // console.log('Right pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas);
            // console.log('elementsize:' ,elementSize);
        }else{

            playerPosition.x += elementSize;
            setCanvasSize();
            movePlayer();
            // console.log('Right pos: ',playerPosition.y, playerPosition.x);
            // console.log('sizecanvas: ',sizeCanvas);
            // console.log('elementsize:' ,elementSize);
        }
    }else if(event.key == 'ArrowLeft'){
        
        

        // Controlling the left limit movement
        // depuring
        // console.log('PlayerPos: ', playerPosition.x);
        // console.log('Limit Lower: ',limitCanvas.LowerLeftCorner[0])
        if((playerPosition.x) < elementSize){
            setCanvasSize();
            movePlayer();
            // console.log('Left pos: ',playerPosition.y, playerPosition.x);
            // console.log('elementsize', elementSize);
        }else {

            playerPosition.x -= elementSize;
            setCanvasSize();
            movePlayer();
            // console.log('Left pos: ',playerPosition.y, playerPosition.x);
            // console.log('elementsize', elementSize);
        }
    }
}

function printU(){
    
    // console.log('Up button pressed');
    playerPosition.y -= elementSize;
    setCanvasSize();
    movePlayer();
}
function printD(){
    
    // console.log('Down button pressed');
    playerPosition.y += elementSize;
    setCanvasSize();
    movePlayer();
    
}
function printR(){
    
    // console.log('Rigth button pressed');
    playerPosition.x += elementSize;
    setCanvasSize();
    movePlayer();
    
}
function printL(){
    
    // console.log('Left button pressed');
    playerPosition.x -= elementSize;
    setCanvasSize();
    movePlayer();
    
}


// let repro;


// function fillMap(){

//     let counterX = 0;
//     let counterY = 1;
//     let sense;

//     if(!repro){
//         repro = setInterval(eachSecond, 20);

//     }
    
    

//     function eachSecond(){

//         // if(counterX >= 9 && counterY >= 10){
//         //     stopRepo();
//         // }

//         // if(counterY % 2 == 0){
//         //     counterX = 10;
//         //     game.fillText(emojis['PLAYER'], counterX * elementSize + 8, counterY * elementSize);
//         //     counterX--;
//         //     if(counterX <= 0){
//         //         counterY++;
//         //     }
//         // } 
        
//         if(counterY <= 10){

            
//             game.fillText(emojis['PLAYER'], counterX * elementSize + 8, counterY * elementSize);
//             counterX++;
//             console.log(counterX, counterY)
//             // eachSecond();
//             if(counterX >= 10){
//                 counterY++
//                 counterX = 0;
//             }
            

//         }
        
        
        
//     }
    
//     // for(let i = 0; i <= 10; i++){
        
//     //     for(let j = 1; j <= 10; j++){
            
//     //         setInterval(eachSecond, 1000);
//     //         function eachSecond(){

//     //             game.fillText(emojis['PLAYER'], i * elementSize + 8, j * elementSize);
//     //         }

            
//     //     }
        
//     // }
    
    
// }

function stopRepo(){

    clearInterval(repro);

    repro = null;
    
}

// fillMap();