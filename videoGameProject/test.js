


let colision_Map = {};

let stage = 0;

let map = maps[stage];

let mapRow = map.trim().split("\n");

let contentRow = mapRow.map(element => element.trim().split(''));


for(let col = 0; col < 10; col++){
    
    let index = `x${col}`;
    colision_Map.index;
    
    for(let row = 1; row <= 10; row ++){

        
        
        let fig = contentRow[row-1][col];
        let X_Position = (col*elementSize + 8);
        let Y_Position = (row*elementSize);
        game.fillText(emojis[fig], X_Position, Y_Position);


        if(contentRow[col][row - 1] === 'X'){
            colision_Map[col].push(1);
        }else colision_Map[col].push(0);
        
        
    }
    
}

console.log(colision_Map);



