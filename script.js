var botonEncriptar = document.querySelector(".btn-encriptar");
var botonesencriptar = document.querySelector(".btn-descifrar");
var muneco = document.querySelector(".muneco");
var botonEncriptar = document.querySelector("#encriptar");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick =encriptar;
botonesencriptar.onclick= descifrar;
function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.texConten =  encriptarTexto()
    };
