var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", function() {//Agregar evento de cuando se carga la pagina y se le asigna una funcion
    dibujar();
});

function dibujar() {
    lapiz.drawImage(fondo.imagen,0,0);
};