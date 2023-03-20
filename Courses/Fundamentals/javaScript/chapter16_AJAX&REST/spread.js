

const scale = function (scale, ...numbers) { // (...) indicates the "spread" function, whose duty is to store all the remaining elements that are passed as parameters and store them in an array with the name of the element that is placed before it.
    return numbers.map(n => scale * n);
}
console.log(scale(1.3, 2, 3));


const winterMonths = ['Dec', 'Jan', 'Feb'];
const summerMonths = ['Jun', 'Jul', 'Aug'];

const winterAndsummerMonths = [...winterMonths, ...summerMonths];

console.log(winterAndsummerMonths);


const julienAndTheOthers = function(Julien, ...theOthers) {
    return `Martin `+theOthers;
}

console.log(julienAndTheOthers('Marie', 'Camilo', 'Julien', 'Simon'));