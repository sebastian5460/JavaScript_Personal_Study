
let T = 1;
let A = 1;
let counter = 0;

let Greeting = function () {
    
    counter += 0.1;

    if((counter % T) <= 0.5){

        console.log(`Alto: ${counter.toFixed(1)}`);

    } else {
        console.log(`Bajo: ${counter.toFixed(1)}`);
    }
    
}


setInterval(Greeting,100);



