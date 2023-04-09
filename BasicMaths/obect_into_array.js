




const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};


function solution(obj){

    const valueArray = []

    const val_arr = Object.entries(obj)
    console.log(val_arr);

    for(let i = 0; i < val_arr.length; i++){

        const objeto = {id : val_arr[i][0], name: val_arr[i][1]}
        valueArray[i] = objeto;
        
    }
    

    console.log(valueArray);

    return valueArray;

    
}

solution(obj);