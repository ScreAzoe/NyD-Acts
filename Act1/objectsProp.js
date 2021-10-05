'use strict'

function enfocarImagen(id_imagen){
    var imagen= document.querySelector(id_imagen);
    imagen.width= "400";
    imagen.height= "400";
}

function desenfocarImagen(id_imagen){
    var imagen= document.querySelector(id_imagen);
    imagen.width= "300";
    imagen.height= "300";
}