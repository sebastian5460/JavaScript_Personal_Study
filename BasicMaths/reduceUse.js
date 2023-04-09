
//list of random number from 0 to 100
const list = [];

list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);
list.push(Math.random().toFixed(2)*100);

//printing the list
console.log(list);


//function to be processed for the reduce() method
//reduce method receives 2 arguments, accumulatedValue and newValue
function sumList(accumulatedValue, newValue){

    return accumulatedValue + newValue;
    
}

//sum of all the numbers in the array
const sum_Total_List = list.reduce(sumList);

//average of such sum
const average = sum_Total_List / list.length;

console.log("averege: ")
console.log(average);



const nameList = [];

nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);
nameList.push(Math.random().toFixed(2)*100);

console.log(nameList);

//another way to express the reduce() method
const sumNewList = nameList.reduce((accumulated, newElement) => accumulated + newElement);

const otherAverage = sumNewList / nameList.length;

console.log(otherAverage);










// "3 temp de 0 a 60 seg más económicos, de 0 a 90 segundos, que con la base"
// "3 relevos de 8 pines con base a 110V "

