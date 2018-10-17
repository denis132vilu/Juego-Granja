document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
const DIMENSION = 80;
var x = random(0, 5) * 80;
var y = random(0, 5) * 80;
var matriz = new Array(6);

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOK: false
};

var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOK: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image,
    cargaOK: false
};

var cuchillo = {
    url: './imagenes/cuchillo.png',
    imagen: Image,
    cargaOK: false
};

var llave = {
    url: './imagenes/llave.png',
    imagen: Image,
    cargaOK: false
}

fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
llave.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;
llave.imagen.src = llave.url;

fondo.imagen.addEventListener("load", function() { //Agregar evento de cuando se carga la pagina y se le asigna una funcion
    fondo.cargaOK = true;
    dibujar();
});

vaca.imagen.addEventListener("load", function() {
    vaca.cargaOK = true;
    // dibujar();
});

cerdo.imagen.addEventListener("load", function() {
    cerdo.cargaOK = true;
    // dibujar();
});

cuchillo.imagen.addEventListener("load", function() {
    cuchillo.cargaOK = true;
    // dibujar();
});

llave.imagen.addEventListener("load", function() {
    llave.cargaOK = true;
    dibujar();
});

iniciarMatriz();
inicializarVacas();
inicializarCerdos();
dibujar();

function dibujar() {
    if (fondo.cargaOK) {
        lapiz.drawImage(fondo.imagen, 0, 0);
    }
    // if (vaca.cargaOK) {

    // }
    // if (cerdo.cargaOK) {

    // }
    // if (cuchillo.cargaOK) {
    //     // lapiz.drawImage(cuchillo.imagen, random(0,5) * 80, random(0,5) * 80);
    // }
    dibujarMatriz();
    if (llave.cargaOK) {
        lapiz.drawImage(llave.imagen, x, y);
    }
}

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
}

function movimiento(evento) {
    switch (evento.keyCode) {
        case tecla.LEFT:
            if (x > 0) {
                x = x - DIMENSION;
            }
            dibujar();
            // lapiz.drawImage(llave.imagen, x, y);
            break;

        case tecla.UP:
            if (y > 0) {
                y = y - DIMENSION;
            }
            dibujar();
            // lapiz.drawImage(llave.imagen, x, y);
            break;

        case tecla.RIGHT:
            if (x < 400) {
                x = x + DIMENSION;
            }
            dibujar();
            // lapiz.drawImage(llave.imagen, x, y);
            break;

        case tecla.DOWN:
            if (y < 400) {
                y = y + DIMENSION;
            }
            dibujar();
            // lapiz.drawImage(llave.imagen, x, y);
            break;

        case tecla.ENTER:
            console.log(matriz);
            alert(random(1, 10));
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarMatriz() {

    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(6);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

function inicializarVacas() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var row = random(0, 5);
        var col = random(0, 5);
        if (matriz[row][col] == 'x') {
            matriz[row][col] = 'v';
        }
    }
}

function inicializarCerdos() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var row = 0 + random(0, 5);
        var col = 0 + random(0, 5);
        if (matriz[row][col] == 'x') {
            matriz[row][col] = 'c';
        }
    }
}

function dibujarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'v') {
                lapiz.drawImage(vaca.imagen, i * DIMENSION, j * DIMENSION);
            } else if (matriz[i][j] == 'c') {
                lapiz.drawImage(cerdo.imagen, i * DIMENSION, j * DIMENSION);
            }
        }
    }
}