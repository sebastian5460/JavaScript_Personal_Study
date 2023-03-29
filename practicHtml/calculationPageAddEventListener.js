const ip1 = document.querySelector("#Op1");         //Select op1 id
const ip2 = document.querySelector("#Op2");
const text1 = document.querySelector("#result");
const btn = document.querySelector("#btnCalculate");
const btnAdd = document.querySelector("#btnAdd");
const btnSub = document.querySelector("#btnSub");
const btnMult = document.querySelector("#btnMult");
const btnDiv = document.querySelector("#btnDiv");

btnAdd.addEventListener('click', addition);         //Listener and the function to be executed
btnSub.addEventListener('click', Substraction);
btnMult.addEventListener('click', Multiplication);
btnDiv.addEventListener('click', Division);

function addition(){

    const result = parseFloat(ip1.value) + parseFloat(ip2.value);
    text1.innerText = result;
    
}

function Substraction(){

    const result = parseFloat(ip1.value) - parseFloat(ip2.value);
    text1.innerText = result;
    
}

function Multiplication(){

    const result = parseFloat(ip1.value) * parseFloat(ip2.value);
    text1.innerText = result;
    
}

function Division(){

    if(ip2.value !== '0' ){

        const result = parseFloat(ip1.value) / parseFloat(ip2.value);
        text1.innerText = result;
    }else text1.innerText = "It is not possible divsion by 0";
    

    
}




// btn.addEventListener('click', btnClick);

// function btnClick(){

//     const result = parseInt(ip1.value) + parseInt(ip2.value);
//     text1.innerText = result;
    
// }