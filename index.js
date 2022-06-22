/* Creamos un catalogo de almacen de bebidas que contenga 5 productos diferentes
Solicitamos al usuario elegir su combo y las cantidades del mismo */

let titulo = "Almacen de Bebidas";
let totalCombos = 5;
let totalCompra = 0;

let combo1 = 1;
let combo2 = 2;
let combo3 = 3;
let combo4 = 4;
let combo5 = 5;

let comboFernet = "Fernet + CocaCola";
let comboVodka = "Absolut + Red Bull";
let comboCampari = "Campari + Citric";
let comboVino = "Alamos + Otro Loco Mas";
let comboGin = "Herederos + Scheweppes";

let precioCombo1 = 1050;
let precioCombo2 = 2900;
let precioCombo3 = 950;
let precioCombo4 = 1500;
let precioCombo5 = 2500;

let nombre = "";

const catalogo = () => {
    let mensaje = titulo;
    mensaje = mensaje + "\r \n";
    mensaje = mensaje + parseInt(combo1) + "-" + comboFernet + "$" + parseInt(precioCombo1);
    mensaje = mensaje + "\r \n";
    mensaje = mensaje + parseInt(combo2) + "-" + comboVodka + "$" + parseInt(precioCombo2);
    mensaje = mensaje + "\r \n";
    mensaje = mensaje + parseInt(combo3) + "-" + comboCampari + "$" + parseInt(precioCombo3);
    mensaje = mensaje + "\r \n";
    mensaje = mensaje + parseInt(combo4) + "-" + comboVino + "$" + parseInt(precioCombo4);
    mensaje = mensaje + "\r \n";
    mensaje = mensaje + parseInt(combo5) + "-" + comboGin + "$" + parseInt(precioCombo5);
    mensaje = mensaje + "\r \n";

    return (mensaje);
}

const carroCompra = (producto, cantidad) => {

    let mensaje = " ";

    switch (producto) {
        case "1" : mensaje = parseInt(combo1) + " " + comboFernet + "$" + parseInt(precioCombo1);
                totalCompra = totalCompra + parseInt (precioCombo1 * cantidad); 
                break;
        
        case "2" : mensaje = parseInt(combo2) + " " + comboVodka + "$" + parseInt(precioCombo2);
                totalCompra = totalCompra + parseInt (precioCombo2 * cantidad); 
                break;
        
        case "3" : mensaje = parseInt(combo3) + " " + comboCampari + "$" + parseInt(precioCombo3);
                totalCompra = totalCompra + parseInt (precioCombo3 * cantidad); 
                break;
        
        case "4" : mensaje = parseInt(combo4) + " " + comboVino + "$" + parseInt(precioCombo4);
                totalCompra = totalCompra + parseInt (precioCombo4 * cantidad); 
                break;
        
        case "5" : mensaje = parseInt(combo5) + " " + comboGin + "$" + parseInt(precioCombo5);
                totalCompra = totalCompra + parseInt (precioCombo5 * cantidad); 
                break;

        }
    
}

nombre = prompt("Ingrese su nombre"); 
let respuesta = "email";

respuesta = prompt(`Hola ${nombre} ingresa tu email para ingresar a nuestro catalogo`);

while (repuesta = "email") {
    let producto = prompt(catalogo());
    let cantidad = prompt(`Seleccion la cantidad ${nombre}`);
    
    carroCompra(producto, cantidad);
    alert("Total de tu compra" + " " + parseInt(totalCompra));

    respuesta = prompt(`${nombre} Deseas seguir comprando?`);
    if (respuesta == "NO");
    alert("Gracias");
    break;
}



