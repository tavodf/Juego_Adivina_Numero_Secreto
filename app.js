let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSortiados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ?'vez': 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        //El usuario no acertó.
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }  
    return
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumeroSortiados)
    // Si ya Sorteamos todos los números
    if (listaNumeroSortiados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {  
        // Si el número generado está en la lista
        if(listaNumeroSortiados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSortiados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Adivina el Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;   
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja(); 
    // Indicar mensaje de intervalod de números
    // Generar el numero aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego    
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
