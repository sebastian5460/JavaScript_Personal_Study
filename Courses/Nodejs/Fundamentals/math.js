

function add(x1, x2) {
    const operation = "sum";
    return x1 + x2;
}


function substract(x1, x2){
    return x1 - x2;
}


function multiply (x1, x2) {
    return x1 * x2;
}


function divide(x1, x2) {

    let div;
    if (x2 == 0) {
        div = "You can't do that!!!";
    } else {
        div = x1 / x2;
    }

    return div;
}


exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

