/* Creamos un catalogo de almacen de bebidas que contenga 5 productos diferentes
Solicitamos al usuario elegir su combo y las cantidades del mismo */

const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const templateFooter = document.getElementById('template-footer').content;
const teompleteCarrito = document.getElementById('template-carrito').content
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
        fetchData()
})
cards.addEventListener('click', e =>{
        addCarrito(e)
})

const fetchData = async () => {
        try { 
                const res = await fetch ('index.json')
                const data = await res.json()
                /* console.log(data);*/
                pintarCards(data);
        } catch (error) {
                console.log(error);
        }
}

const pintarCards = data =>{
        data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src",producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id= producto.id


                
                
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)
        })
        cards.appendChild(fragment);        

}

const addCarrito = e => {
       
        if (e.target.classList.contains('btn-dark')){
           setCarrito(e.target.parentElement);

        }
        e.stopPropagation()
}

const setCarrito = objeto => {
      const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
        }
        if(carrito.hasOwnProperty(producto.id)){
                producto.cantidad = carrito[producto.id].cantidad + 1
        }

        carrito[producto.id] = {... producto}
        console.log(carrito);

}

const pintarCarrito = () => {
        console.log(carrito);
}


/* 
let titulo = "Almacen de Bebidas";
let totalCombos = 5;
let totalCompra = 0;


class Producto{
        constructor(id, combo, precio ){
                this.id = id;
                this.combo = combo;
                this.precio = precio;
        }
}

const combosProductos = [];
combosProductos.push(new Producto(1, "Fernet + CocaCola", 1050));
combosProductos.push(new Producto(2, "Absolut + Red Bull", 2900));
combosProductos.push(new Producto(3, "Campari + Citric", 950));
combosProductos.push(new Producto(4, "Alamos + Otro Loco Mas", 1500));
combosProductos.push(new Producto(5, "Herederos + Scheweppes", 2500));



let nombre = "";

const catalogo = () => {
        
      
        let mensaje = titulo;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + `${combosProductos[0].id}  ${combosProductos[0].combo} $ ${combosProductos[0].precio} `;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + `${combosProductos[1].id}  ${combosProductos[1].combo} $ ${combosProductos[1].precio} `;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + `${combosProductos[2].id}  ${combosProductos[2].combo} $ ${combosProductos[2].precio} `;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + `${combosProductos[3].id}  ${combosProductos[3].combo} $ ${combosProductos[3].precio} `;
        mensaje = mensaje + "\r \n";
        mensaje = mensaje + `${combosProductos[4].id}  ${combosProductos[4].combo} $ ${combosProductos[4].precio} `;
        mensaje = mensaje + "\r \n";
    
        return (mensaje);
        
    }
    
    const carroCompra = (producto, cantidad) => {

        let mensaje = " ";

    switch (producto) {
        case "1" : mensaje = combosProductos[1];
                totalCompra = totalCompra + parseInt (combosProductos[0].precio * cantidad); 
                break;
        
        case "2" : mensaje = combosProductos[2];
                totalCompra = totalCompra + parseInt (combosProductos[1].precio * cantidad); 
                break;
        
        case "3" : mensaje = combosProductos[3];
                totalCompra = totalCompra + parseInt (combosProductos[2].precio * cantidad); 
                break;
        
        case "4" : mensaje = combosProductos[4];
                totalCompra = totalCompra + parseInt (combosProductos[3].precio * cantidad); 
                break;
        
        case "5" : mensaje = combosProductos[5];
                totalCompra = totalCompra + parseInt (combosProductos[4].precio * cantidad); 
                break;

        }
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

 */



