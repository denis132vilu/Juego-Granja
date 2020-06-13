document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var matriz = new Array(6);
const DIMENSION = 80;
var x = random(0, 5) * DIMENSION;
var y = random(0, 5) * DIMENSION;
var vidas = 3;

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
};

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

// vaca.imagen.addEventListener("load", function() {
//     vaca.cargaOK = true;
// });

// cerdo.imagen.addEventListener("load", function() {
//     cerdo.cargaOK = true;
// });

// cuchillo.imagen.addEventListener("load", function() {
//     cuchillo.cargaOK = true;
// });

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
    dibujarMatriz();
    if (llave.cargaOK) {
        lapiz.drawImage(llave.imagen, x, y);
    }
};

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
};

function movimiento(evento) {
    switch (evento.keyCode) {
        case tecla.LEFT:
            if (x > 0) {
                x = x - DIMENSION;
            }
            dibujar();
            break;

        case tecla.UP:
            if (y > 0) {
                y = y - DIMENSION;
            }
            dibujar();
            break;

        case tecla.RIGHT:
            if (x < 400) {
                x = x + DIMENSION;
            }
            dibujar();
            break;

        case tecla.DOWN:
            if (y < 400) {
                y = y + DIMENSION;
            }
            dibujar();
            break;

        case tecla.ENTER:
            console.log(matriz);
            verificar();
            break;
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
};

function inicializarVacas() {
    var numero = random(0, 6);
    for (var i = 0; i <= numero; i++) {
        var row = random(0, 5);
        var col = random(0, 5);
        if (matriz[row][col] == 'x') {
            if (i == 0) {
                matriz[row][col] = 'vs';
            } else {
                matriz[row][col] = 'vm';
            }
        }
    }
};

function inicializarCerdos() {
    var numero = random(0, 6);
    for (var i = 0; i <= numero; i++) {
        var row = random(0, 5);
        var col = random(0, 5);
        if (matriz[row][col] == 'x') {
            if (i == 0) {
                matriz[row][col] = 'cs';
            } else {
                matriz[row][col] = 'cm';
            }
        }
    }
};

function dibujarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'vm' || matriz[i][j] == 'vs') {
                lapiz.drawImage(vaca.imagen, j * DIMENSION, i * DIMENSION);
            } else if (matriz[i][j] == 'cm' || matriz[i][j] == 'cs') {
                lapiz.drawImage(cerdo.imagen, j * DIMENSION, i * DIMENSION);
            }
        }
    }
}

function verificar() {
    let valorMatriz = matriz[y / DIMENSION][x / DIMENSION];
    if (valorMatriz == 'x') {
        alert("No hay ningún animal.");
    } else {
        if (valorMatriz == 'vs' || valorMatriz == 'cs') {
            if (vidas == 3) {
                alert("¡Felicidades! Juego perfecto. ¡Has encontrado al animal sano exitosamente!");
            } else {
                alert("¡Has encontrado al animal sano exitosamente!");
            }
            location.reload();
        } else {
            vidas--;
            if (vidas == 0) {
                alert("¡Has perdido!");
                location.reload();
            } else {
                alert("Te equivocaste, te quedan " + vidas.toString() + " oportunidades.");
            }
        }
    }

}
