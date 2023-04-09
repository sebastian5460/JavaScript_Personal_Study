
const Stats_func = {}





Stats_func.isPar = function isPar(arr){

    const is_par_total_element = arr.length % 2 ? false : true;

    return is_par_total_element;
    
    
}


Stats_func.calculateMode =  function calculateMode(arr){

    // list to save all the numbers of the data
    const Count_list = [];

    for(let i = 0; i < arr.length; i++){

        // current element
        const element = arr[i];

        // if the current element exists, increment in 1 the value of it's respectevely key
        if(Count_list[element]){

            Count_list[element] += 1;
        }else {
            
            Count_list[element] = 1;
        }
        
        
    }
    
    // returns an array of a given object's own enumerable string-keyed property key-value pairs.
    const values_list = Object.entries(Count_list);
    
    console.log(values_list);
    // array fixed with respect to its second value (upward)
    const val = Stats_func.sortBidimensionalList(values_list, 1);

    const lengthVal = val.length - 1;

    
    if((val[lengthVal - 1][1] / val[lengthVal][1]) == 1){

        return "there is more than 1 mode";
        
    }else return val[lengthVal][0];


    
}

Stats_func.sortBidimensionalList =  function sortBidimensionalList(unorderedList, i ){

    function orderSortList(accumulatedValue, newValue){

        return accumulatedValue[i] - newValue[i];
        
    }

    const list = unorderedList.sort(orderSortList);

    return list;
    
}



Stats_func.calcualteMedian = function calcualteMedian(arr){

    const consult = Stats_func.isPar(arr);

    if(consult){

        //array is sorted
        arr.sort((a,b) => a - b );

        //found the middle term in the array arr
        const middleTerm = arr.length/2;

        // Being an even number we must calculate the average of the 2 terms in the 
        // middle

        // const median = ((arr[middleTerm - 1] + arr[middleTerm])/2);

        const result = ((arr[middleTerm - 1] + arr[middleTerm])/2);
        

        return result;
        
    }else {

        //array is sorted
        arr.sort((a,b) => a - b );
        // showing the sorted array
        
        const middleTerm = Math.round(arr.length/2) - 1;

        const result = (arr[middleTerm] );

        return result;
        
    }
    
}


Stats_func.average = function average(arr){

    let sumatory=0;
    let average = 0;

    for(let i=0; i < arr.length;i++){
        sumatory += arr[i];
    }

    average = sumatory / arr.length;
    
    return average;
}

// Stats_func.calculateMode([1,1,1,2,'a','a','abc','abc','abc','abc','abc','d','d','d',5,5]) 