

let maxNumber = 0;
let maxPosition = 0;
let repetitions = 0;
let positions = [];


// const array = new Array(100);

// for(let i = 0; i < array.length; i++){

//     const rand = Math.round(Math.random()*10);
//     array[i] = rand;
    
// }



array = [2,4,4,3,4,3,5,5,6,6];



for( let i = 0; i < array.length; i++){

    console.log(`Position ${i}. ${array[i]}`);
    
}

// A simple way to get the max number in an array
// console.log(`Máx number: ${Math.max(...array)}`);


for(let i = 0; i < array.length; i++){

    if(maxNumber == array[i]){

        repetitions += 1;
        positions.push(i);
    }

    if(array[i] > maxNumber){
        maxNumber = array[i];
        maxPosition = i;

        
    }
    
    if(Math.max(...positions) < maxNumber){
        positions.length = 0;
        repetitions = 0;
    }
    
}

console.log(`Máx number: ${maxNumber}   in the ${maxPosition} position.`);

if(repetitions > 0 ){

    console.log(`Repetitions: ${repetitions}`);
    console.log(`Repetitions Positions: ${positions}`);
    
}