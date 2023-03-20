

/*
let obj = {

    name: 'Carlos',
    surName: 'Oswaldo',
    desciption: function(){
        console.log(`name: ${this.name}. Surname: ${this.surName}`);
    }

    
}

let obj2 = new Object();

obj2.name = 'Camilo';
obj2.surName = 'Ortiz';


let key = '';

for (key in obj2) {
    console.log(`${key}: ${obj2[key]}`);
}

let str = ['Karen', 'Sebastian', 'Nathan'];

for(element of str){
    console.log(`name: ${element} `);
}

*/

/*
let myFunc = () => console.log('This is a prove');

myFunc();

let str = ['Karen', 'Sebastian', 'Nathan'];

let otherFunc = () => {

    for(let i=0; i<str.length; i++){

        if(str[i]=="Karen"){
            str[i] = 'Dayanna';
            console.log(str[i]);
        } else {
            console.log(str[i]);
        }
        
    }
    
}

otherFunc();

let multiply = (number) => console.log(number*4);

multiply(4);

*/



let myVar = () => console.log('This way');
myVar();

let anonymous = function() {
    return 'This is the way';
}

console.log(anonymous());