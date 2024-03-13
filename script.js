var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedorimgmuneco");
var contenedorTexto = document.querySelector(".cajatexto");
var resultado = document.querySelector(".texto-resultados");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarMuneco();
    var texto = contenedorTexto.value;
    resultado.textContent = encriptarTexto(texto);
    // Limpiar el contenido del contenedor de párrafo
    document.querySelector(".contenedor-parrafo").innerHTML = "";
}

function desencriptar() {
    mostrarMuneco();
    var textoCifrado = resultado.textContent;
    contenedorTexto.value = desencriptarTexto(textoCifrado);
}

// Resto del código permanece igual


function encriptarTexto(texto) {
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(texto) {
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto.substring(i, i + 4)) {
            case "enter":
                textoFinal += "e";
                i += 4;
                break;
            case "imes":
                textoFinal += "i";
                i += 3;
                break;
            case "ober":
                textoFinal += "o";
                i += 3;
                break;
            case "ufat":
                textoFinal += "u";
                i += 3;
                break;
            default:
                textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function ocultarMuneco() {
    muneco.classList.add("ocultar");
}

function mostrarMuneco() {
    muneco.classList.remove("ocultar");
}

// Agregamos el evento de botón copiar
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Se ha copiado al portapapeles");
});
