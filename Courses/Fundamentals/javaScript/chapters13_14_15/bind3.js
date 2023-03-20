
let test = {

    a: 1,
    sum(b,c,d) {
        console.log(this.a+b+c+d);
    }
    
}

let numberA = {
    a:10
}

test.sum(20,30,40);
// the "sum" method, requires 3 arguments, using bind we'll use 4 arguments, where "numberA" is the new object that "this" is going to refer. The important here is that we can specified part of the arguments when we use "bind" and the rest of the arguments after.
let littleBind = test.sum.bind(numberA, 50);
littleBind(20,40);
