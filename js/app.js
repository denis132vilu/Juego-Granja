var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

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

fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

fondo.imagen.addEventListener("load", function() {//Agregar evento de cuando se carga la pagina y se le asigna una funcion
    fondo.cargaOK = true;
    dibujar();
    // lapiz.drawImage(fondo.imagen,0,0);
});

vaca.imagen.addEventListener("load", function(){
    vaca.cargaOK = true;
    dibujar();
    // lapiz.drawImage(vaca.imagen,150,100);
});

cerdo.imagen.addEventListener("load", function(){
    cerdo.cargaOK = true;
    dibujar();
    // lapiz.drawImage(cerdo.imagen,200,300);
});

cuchillo.imagen.addEventListener("load", function() {
    cuchillo.cargaOK = true;
    dibujar();
});

function dibujar() {
    if (fondo.cargaOK) {
        lapiz.drawImage(fondo.imagen,0,0);
    };
    if (vaca.cargaOK) {
        lapiz.drawImage(vaca.imagen,150,100);
    };
    if (cerdo.cargaOK) {
        lapiz.drawImage(cerdo.imagen,200,200);
    };
    if (cuchillo.cargaOK) {
        lapiz.drawImage(cuchillo.imagen, 300,200);
    }
};