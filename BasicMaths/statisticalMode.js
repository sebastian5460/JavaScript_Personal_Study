


//array with random numbers
const numberList = []
// the reason why it was decided to multiply by 1000 and divide by 10
// is because multiplying just by 100, is some cases, the result returned
// more than two decimal places
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );

// numberList.push(19);
// numberList.push(20);
// numberList.push(24);
// numberList.push(38);
// numberList.push(39);
// numberList.push(9);
// numberList.push(5);
// numberList.push(50);
// numberList.push(56);
// numberList.push(58);
// numberList.push(6);
// numberList.push(62);
// numberList.push(64);
// numberList.push(9);
// numberList.push(64);
// numberList.push(69);
// numberList.push(70);
// numberList.push(75);
// numberList.push(9);
// numberList.push(87);

function modeCalculation(arr){

    let currentMode = 0;
    let currentValue = 0;

    let newMode = 0;
    let newValue = 0;

    let message = '';

    // array is sorted
    arr.sort((a,b) => a - b);
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        
        if( currentMode == 0 ){
            currentMode++;
            currentValue = arr[i];
        } else if( arr[i] == currentValue ){
            currentMode++;
        } else{

            if( newMode == 0 ){
            
                newMode++;
                newValue = arr[i];
    
            } else if( arr[i] == newValue){
    
                newMode++;
                
            } else {
                newMode = 1;
                newValue = arr[i];
            }
            
        }

        if(newMode > currentMode){

            currentMode = newMode;
            currentValue = newValue;
            newMode = 0;
            newValue = 0;
            
        }
        
        
    }

    if((newMode == currentMode) && currentMode != 1){
        message = "There is more than 1 mode present";
    }else if(newMode == currentMode){
        message = "There is no mode in the list";
    }

    if(message){
        currentValue = message;
    }
    
    const result = ("Mode: " + currentValue);
    
    return result;
    
}


const mode = modeCalculation(numberList);

console.log(mode);


