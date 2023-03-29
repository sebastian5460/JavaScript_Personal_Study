


const h1 = document.querySelector('h1');
const p1 = document.querySelector('#operand1');
const p2 = document.querySelector('#operand2');
const pResult = document.getElementById("result");


// h1.innerHTML = "Calc xD";
// h1.classList.add("Verde");

function space1(){
    
    console.log("First Operand is: " + p1.value);
    
}
function space2(){
    
    console.log("Second Operand is: " + p2.value);
    
}

function btnResult(){

    const result1 = parseInt(p1.value) + parseInt(p2.value);
    pResult.innerText = result1;
    console.log(result1);
    
}




