


// This is an flat an flatMap exercise


var arr = [1,2,3,4,[3,5],[7,4]]   // 2 levels array
var arr2 = [1,2,3,4,[3,5,[6,5]],[7,4]]   // 3 levels array

console.log(arr.flat())     //flat 1 level in tha "arr" array
console.log(arr2.flat())    //Ther is 1 array inside the output yet

// If we want an entire flat array, we must specify the levels we want to flat
console.log(arr2.flat(2))   //Now we have an entire flat array




//  ## flatMap() ##

var arr3 = [1,2,3,4,[3,5,[6,5]],[7,4]]  // 3 levels array

// flatMap maps the array and after makes a flat
console.log(arr3.flatMap(element => element * 2)) //output has a NaN

//Making a flat before flatMap we avoid the problem

var arr4 = [1,2,3,4,[3,5,[6,5]],[7,4]].flat(2)  // entire flat array

// In addition to the flat method, we apply a filter (print the double of the odd numbers)
console.log(arr4.flatMap(element => element % 2 == 0 ? [] : element * 2))







