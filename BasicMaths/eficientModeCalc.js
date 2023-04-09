
const numberList = [];

numberList.push(19);
numberList.push(20);
numberList.push(24);
numberList.push(38);
numberList.push(39);
numberList.push(9);
// numberList.push(9);
numberList.push(23);
numberList.push(23);

function calculateMode(arr){

    // list to save all the numbers of the data
    const Count_list = [];

    for(let i = 0; i < arr.length; i++){

        const element = arr[i];

        // if the current element exists, increment in 1 the value of it's respectevely key
        if(Count_list[element]){

            Count_list[element] += 1;
        }else {
            
            Count_list[element] = 1;
        }
        
        
    }
    
    const values_list = Object.entries(Count_list);
    
    // array fixed with respect to its second value (upward)
    const val = sortBidimensionalList(values_list, 1);

    const lengthVal = val.length - 1;

    
    if((val[lengthVal - 1][1] / val[lengthVal][1]) == 1){

        return "there is more than 1 mode";
        
    }else return val[lengthVal][0];


    
}

function sortBidimensionalList(unorderedList, i ){

    function orderSortList(accumulatedValue, newValue){

        return accumulatedValue[i] - newValue[i];
        
    }

    const list = unorderedList.sort(orderSortList);

    return list;
    
}

const numbers = calculateMode(numberList);


console.log(numbers);
