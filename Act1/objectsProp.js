'use strict'

function enfocarImagen(id_imagen){
    var imagen= document.querySelector(id_imagen);
    imagen.width= "300";
    imagen.height= "300";
}

function desenfocarImagen(id_imagen){
    var imagen= document.querySelector(id_imagen);
    imagen.width= "200";
    imagen.height= "200";
}

function seleccionarItem(nombre, precio){
    var formulario= document.querySelector('#formularioPedido');
    formulario.producto.value= nombre;
    formulario.precio.value=  precio;
    formulario.cantidad.value= 1;
    formulario.total.value= precio;
    formulario.boton_pagar.disabled=false;
}

function calcularTotal(){
    let formulario= document.querySelector('#formularioPedido');
    formulario.total.value= formulario.cantidad.value*formulario.precio.value;
}

function limpiar(){
    let formulario= document.querySelector('#formularioPedido');
    formulario.boton_pagar.disabled= true;
}