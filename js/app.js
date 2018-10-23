document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var matriz = new Array(6);
const DIMENSION = 80;
var x = random(0, 5) * DIMENSION;
var y = random(0, 5) * DIMENSION;
var incorrect = 3;
var cont = false;

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
    var numero = random(1, 6);
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
    var numero = random(1, 6);
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
                lapiz.drawImage(vaca.imagen, i * DIMENSION, j * DIMENSION);
            } else if (matriz[i][j] == 'cm' || matriz[i][j] == 'cs') {
                lapiz.drawImage(cerdo.imagen, i * DIMENSION, j * DIMENSION);
            }
        }
    }
}

function verificar() {
    if (matriz[x / DIMENSION][y / DIMENSION] == 'x') {
        alert("No hay ningún animal.");
    } else if (matriz[x / DIMENSION][y / DIMENSION] == 'vaca sana' || matriz[x / DIMENSION][y / DIMENSION] == 'cerdo sano') {
        alert("Ya has presionado aquí anteriormente.");
    } else {
        if (matriz[x / DIMENSION][y / DIMENSION] == 'vs' || matriz[x / DIMENSION][y / DIMENSION] == 'cs') {
            if (cont) {
                alert("¡Has encontrado los dos animales sanos exitosamente!");
                location.reload();
            } else {
                if (matriz[x / DIMENSION][y / DIMENSION] == 'vs') {
                    alert("Has encontrado la vaca sana, te falta el cerdo.");
                    matriz[y / DIMENSION][y / DIMENSION] = 'vaca sana';
                } else {
                    alert("Has encontrado el cerdo sano, te falta la vaca.");
                    matriz[x / DIMENSION][y / DIMENSION] = 'cerdo sano';
                }
                cont = true;
            }
        } else {
            incorrect--;
            if (incorrect == 0) {
                alert("¡Has perdido!");
                location.reload();
            } else {
                alert("Te equivocaste, te quedan " + incorrect.toString() + " oportunidades.");
            }
        }
    }

}