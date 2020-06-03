var lienzoOrigen;
var lienzoResultado;

var ctxOrigen;
var ctxResultado;

var imgOrigen;
var imgResultado;


document.getElementById('cargar').addEventListener('change', leerImagen);
document.getElementById('umbral2').addEventListener('input', byn);
document.getElementById('umbral').addEventListener('input', brillo);
document.getElementById('umbralt').addEventListener('input', trans);

function leerImagen(e) {
    var archivo = e.target.files[0];
    if (archivo) {
        var lector = new FileReader();
        lector.readAsDataURL(archivo);
        lector.onload = function(event) {
            ponerImgEnCanvas(event.target.result);
        }
    }
}

function ponerImgEnCanvas(datosImg) {
    var img = new Image();
    img.src = datosImg;
    img.onload = function() {
        lienzoOrigen = document.getElementById('canvas');
        ctxOrigen = lienzoOrigen.getContext('2d');
        lienzoOrigen.width = img.width;
        lienzoOrigen.height = img.height;
        ctxOrigen.drawImage(img, 0, 0);
        prepararResultados();
    }
}

function prepararResultados() {
    lienzoResultado = document.getElementById('canvas2');
    ctxResultado = lienzoResultado.getContext('2d');
    lienzoResultado.height = lienzoOrigen.height;
    lienzoResultado.width = lienzoOrigen.width;
    imgOrigen = ctxOrigen.getImageData(0, 0, lienzoOrigen.width, lienzoOrigen.height);
    imgResultado = ctxResultado.createImageData(lienzoOrigen.width, lienzoOrigen.height);
}

function copiar() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = imgOrigen.data[i + 1];
        imgResultado.data[i + 2] = imgOrigen.data[i + 2];
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function negativo() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = 255 - imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = 255 - imgOrigen.data[i + 1];
        imgResultado.data[i + 2] = 255 - imgOrigen.data[i + 2];
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function brillo() {
    var i;
    var u = parseInt(document.getElementById("umbral").value);
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = u + imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = u + imgOrigen.data[i + 1];
        imgResultado.data[i + 2] = u + imgOrigen.data[i + 2];
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function rojo() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = 0;
        imgResultado.data[i + 2] = 0;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function verde() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = 0;
        imgResultado.data[i + 1] = imgOrigen.data[i + 1];
        imgResultado.data[i + 2] = 0;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function azul() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = 0;
        imgResultado.data[i + 1] = 0;
        imgResultado.data[i + 2] = imgOrigen.data[i + 2];
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function escalag() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        var prom = (imgOrigen.data[i + 0] + imgOrigen.data[i + 1] + imgOrigen.data[i + 2]) / 3;

        imgResultado.data[i + 0] = prom;
        imgResultado.data[i + 1] = prom;
        imgResultado.data[i + 2] = prom;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function byn() {
    var i;
    var u = parseInt(document.getElementById("umbral2").value)
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        imgResultado.data[i + 0] = (imgOrigen.data[i + 0] > u) ? 255 : 0;
        imgResultado.data[i + 1] = (imgOrigen.data[i + 0] > u) ? 255 : 0;
        imgResultado.data[i + 2] = (imgOrigen.data[i + 0] > u) ? 255 : 0;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function intercambio() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        imgResultado.data[i + 0] = imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = imgOrigen.data[i + 2];
        imgResultado.data[i + 2] = imgOrigen.data[i + 1];
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function trans() {
    var i;
    var u = parseInt(document.getElementById("umbralt").value);
    for (i = 0; i < imgOrigen.data.length; i += 4) {

        imgResultado.data[i + 0] = imgOrigen.data[i + 0];
        imgResultado.data[i + 1] = imgOrigen.data[i + 1];
        imgResultado.data[i + 2] = imgOrigen.data[i + 2];
        imgResultado.data[i + 3] = u;
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function secreta() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        var gris = 0.3 * imgOrigen.data[i + 0] + 0.59 * imgOrigen.data[i + 1] + 0.11 * imgOrigen.data[i + 2];
        imgResultado.data[i + 0] = gris;
        imgResultado.data[i + 1] = gris;
        imgResultado.data[i + 2] = gris;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function serpia() {
    var i;
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        var gris = 0.3 * imgOrigen.data[i + 0] + 0.59 * imgOrigen.data[i + 1] + 0.11 * imgOrigen.data[i + 2];
        imgResultado.data[i + 0] = gris + 100;
        imgResultado.data[i + 1] = gris + 50;
        imgResultado.data[i + 2] = gris;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}

function ruido() {
    for (i = 0; i < imgOrigen.data.length; i += 4) {
        imgResultado.data[i + 0] = imgOrigen.data[i + 0] + Math.random() * 150;;
        imgResultado.data[i + 1] = imgOrigen.data[i + 1] + Math.random() * 150;;
        imgResultado.data[i + 2] = imgOrigen.data[i + 2] + Math.random() * 150;;
        imgResultado.data[i + 3] = imgOrigen.data[i + 3];
    }

    ctxResultado.putImageData(imgResultado, 0, 0);
}