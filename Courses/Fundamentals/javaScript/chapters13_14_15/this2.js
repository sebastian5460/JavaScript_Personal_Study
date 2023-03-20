
let myColor = {
    color: 'blue',
    especification: function() {
        console.log('The best color');
    }
}

function description() {
    console.log(this.color);
}

myColor.read = description;

myColor.nuevaProp = {
    method: description,
    color: 'red'
}

myColor.read();
myColor.nuevaProp.method();
console.log(myColor);