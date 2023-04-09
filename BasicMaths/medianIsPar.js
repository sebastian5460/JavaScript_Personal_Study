

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
// numberList.push(Number(Math.random().toFixed(2)) * 1000 / 10 );
// numberList.push(11);

//check if the number of items of the numberList is even
function isPar(arr){

    const is_par_total_element = arr.length % 2 ? false : true;

    return is_par_total_element;
    
    
}


function calcualteMedian(arr){

    const consult = isPar(arr);

    if(consult){

        //array is sorted
        arr.sort((a,b) => a - b );
        console.log(`sorted array: ${arr}`);

        //found the middle term in the array arr
        const middleTerm = arr.length/2;

        // Being an even number we must calculate the average of the 2 terms in the 
        // middle

        const median = ((arr[middleTerm - 1] + arr[middleTerm])/2);

        const result = ("median: " + ((arr[middleTerm - 1] + arr[middleTerm])/2) )
        

        return result;
        
    }else {

        //array is sorted
        arr.sort((a,b) => a - b );
        // showing the sorted array
        console.log(`sorted array: ${arr}`);
        
        const middleTerm = Math.round(arr.length/2) - 1;

        const result = ("median: " + arr[middleTerm] );

        return result;
        
    }
    
}

const median = calcualteMedian(numberList);

console.log(median);