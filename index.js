/* Creamos un catalogo de almacen de bebidas que contenga 5 productos diferentes
Solicitamos al usuario elegir su combo y las cantidades del mismo */

let titulo = "Almacen de Bebidas";
let totalCombos = 5;
let totalCompra = 0;

let precioCombo1 = 1050;
let precioCombo2 = 2900;
let precioCombo3 = 950;
let precioCombo4 = 1500;
let precioCombo5 = 2500;

class Producto{
        constructor(id, combo , ){
                this.id = id;
                this.combo = combo;
        }
}

const combosProductos = [];
combosProductos.push(new Producto(1, "Fernet + CocaCola"));
combosProductos.push(new Producto(2, "Absolut + Red Bull"));
combosProductos.push(new Producto(3, "Campari + Citric"));
combosProductos.push(new Producto(4, "Alamos + Otro Loco Mas"));
combosProductos.push(new Producto(5, "Herederos + Scheweppes"));

let nombre = "";

const catalogo = () => {
        let mensaje = titulo;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + combosProductos[1] + "$" + precioCombo1;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + combosProductos[2] + "$" + precioCombo2;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + combosProductos[3] + "$" + precioCombo3;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + combosProductos[4] + "$" + precioCombo4;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + combosProductos[5] + "$" + precioCombo5;
        mensaje = mensaje + "\r \n";
    
        return (mensaje);
    }

    const carroCompra = (producto, cantidad) => {

        let mensaje = " ";

    switch (producto) {
        case "1" : mensaje = combosProductos[1];
                totalCompra = totalCompra + parseInt (combosProductos[1] * cantidad); 
                break;
        
        case "2" : mensaje = combosProductos[2];
                totalCompra = totalCompra + parseInt (combosProductos[2] * cantidad); 
                break;
        
        case "3" : mensaje = combosProductos[3];
                totalCompra = totalCompra + parseInt (combosProductos[3] * cantidad); 
                break;
        
        case "4" : mensaje = combosProductos[4];
                totalCompra = totalCompra + parseInt (combosProductos[4] * cantidad); 
                break;
        
        case "5" : mensaje = combosProductos[5];
                totalCompra = totalCompra + parseInt (combosProductos[5] * cantidad); 
                break;

        }
    


/*  
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
 */
/*
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
     */
}

nombre = prompt("Ingrese su nombre"); 
let respuesta = 'SI';

respuesta = prompt(`Hola ${nombre} desea acceder a nuestro catalogo de compras? \r \n SI \r \n NO \r \n SALIR \r \n `);

while (respuesta === 'SI') {
    let producto = prompt(catalogo());
    let cantidad = prompt(`Seleccion la cantidad ${nombre}`);
    
    carroCompra(producto, cantidad);
    alert("Total de tu compra" + " " + parseInt(totalCompra));

    respuesta = prompt(`${nombre} Deseas seguir comprando?`);
    if (respuesta === 'NO' && (totalCompra = 0)) {
        alert('No realizaste ninguna compra');
      }
    }
    
    alert(
      'Gracias ' +
        nombre +
        ' \r\nEl total de tu compra es $' +
        parseInt(totalCompra)
    );





