

let maxNumber = 0;
let maxPosition = 0;

let array = new Array(20);

for(let i = 0; i < array.length; i++){

    const rand = Math.round(Math.random()*100);

    array[i] = rand;
}

for(let i = 0; i < array.length; i++){

    console.log(`Position ${i}: ${array[i]}`);
    
}

for(let i = 0; i < array.length; i++){

    if(array[i] > maxNumber){
        maxNumber = array[i];
        maxPosition = i;
    }

    
}

console.log(`The máx number is: ${maxNumber}    in the ${maxPosition} Position.`);
