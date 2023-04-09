


const arr = [];


arr.push(2);
arr.push(3);
arr.push(5);
arr.push(87);
arr.push(53);
arr.push(74);
arr.push(98);
arr.push(29);
arr.push(35);
arr.push(79);
arr.push(39);


function average(arr){

    let counter=0;
    let average = 0;

    for(let i=0; i < arr.length;i++){
        counter += arr[i];
    }

    average = counter / arr.length;
    
    
    console.log(`total sum: ${counter}`);
    console.log(`completed average: ${average}`);
    
    return average;
}

const result = Number(average(arr).toFixed(2));

console.log(`rounded average: ${result}`);