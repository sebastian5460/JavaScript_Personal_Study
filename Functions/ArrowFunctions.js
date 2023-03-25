


//  ## Arrow Functions ##

//Las arrow functions permite crear funciones de manera más abreviada
//lo cual ahorra tiempo de escritura
//Las arrow functions son siempre funciones anónimas

//javascript puede tomar las funciones como valores, por ende le puede asignar
//a una variable el valor retornado por una función

var matrix = [1,2,4,5]

//La siguiente estructura es la más básica
//Si se tiene un sólo parámetro en la función no será necesario colocar el paréntesis
//sólo el nombre del parámetro y a continuación la lógica de la función antecedido por
//el operador del arrow function =>
//Cuanso hay un sólo parámetro este puede escribirse sin paréntesis
matrix.forEach(element => console.log(element)) //output: 1 2 4 5



//Cuando las arrow functions son de una sola línea tienen el return implícito

const suma = (a,b) => a + b



//Cuando sea necesario escribir código que necesite ser más específico
//se debe colocar el return
const suma2 = (a,b) => {
    c = a+b

    return c+1
}


//Una arrow function, como toda función, también puede escribirse sin parámetros

console.log(() => "Hello World")



//Llamando a las funciones y asignadolas a una constante
const result = suma(3,5)
const result2 = suma2(2,4)

//Impresión de resultados
console.log(result)
console.log(result2)


//CONCLUSIONES:
//Prácticamente las arrow functions son abreviaciones que permiten al desarrollador
//elaborar su trabajo de manera más rápida sin perder el control en la programación.
//La forma como se puede ver la sintáxis de la misma es: () function
//Es decir se leería de al revés de lo que se haría normalmente: function()
//donde primero especificamos los parámetros de la función y luego operador de función
//arrow function =>.
//Recordar que al ser una función debe retornar un valor si la secuencia se puede 
//escribir en una sóla línea de código lo que está a la derecha del => será el valor
//implícito que se tomará como return
//Si es necesario se más implicito se debe respetar la estructura común de una función
//haciendo uso de los bracket {}
