const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    const cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let textoFinal = "";

    for (let letra of mensaje) {
        switch (letra) {
            case 'a': textoFinal += `ada`; break;
            case 'e': textoFinal += `ese`; break;
            case 'i': textoFinal += `idi`; break;
            case 'o': textoFinal += `odo`; break;
            case 'u': textoFinal += `udu`; break;
            default: textoFinal += letra;
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    return mensaje.replace(/ada/g, 'a')
    .replace(/ese/g, 'e')
    .replace(/idi/g, 'i')
    .replace(/odo/g, 'o')
    .replace(/udu/g, 'u');
}



const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});