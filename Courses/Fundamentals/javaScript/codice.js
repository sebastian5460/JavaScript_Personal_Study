
let nombreUsuario = leerCookie('userName');

if(nombreUsuario != '') {
    document.getElementById('saludo').innerHTML = 'Hola ${nombreUsuario';
} else {
    nombreUsuario = prompt('No te conozco. Escribe tu nombre:', '');

    if(nombreUsuario != '' && nombreUsuario != null) {
        configurarCookie('userName', nombreUsuario, 3);
    }
}


const saludo = 'Hola Mundo';
document.getElementById('output').innerHTML = saludo;