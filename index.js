const Productos = 
[
{
    id:123,  
    nombre: "Remera Essentials",
    precio: 15000,
    categoria: "remeras",
    imagen: "./img/Remera.jpg"
},
{
    id:456,  
    nombre: "Buzo Essentials",
    precio: 20000,
    categoria: "buzos",
    imagen: "img/Buzo.jpg"
},
{
    id:789,  
    nombre: "Pantalon Essentials",
    precio: 19000,
    categoria: "pantalones",
    imagen: "img/Pantalon.jpg"
},
]

const cargarProductos = () =>{
    let container = document.querySelector("#container")
    for (const producto of Productos) {
        let div = document.createElement("div")
        div.setAttribute("class","productos")
        div.innerHTML+= `
            <img src="${producto.imagen}" class="imgProducto"></img>   
            <h4>$${producto.precio}</h4> 
            <h5>${producto.nombre}</h4> 
            <button id="${producto.id}" class="btnCarrito">Añadir al carrito</button>    
        `
        container.appendChild(div)
    }
}

cargarProductos()

let carrito = []

const actualizarCarrito =()=>{
    let carritoContenedor = document.querySelector("#carrito")

    let container = document.querySelector("#carritoContenedor")
    if(container){
        container.parentNode.removeChild(container)
    }

    let div = document.createElement("div")
    div.innerHTML= `<h2 class="tituloCarrito">Carrito</h2>`
    div.setAttribute("id","carritoContenedor")
    for (const producto of carrito) {
        div.innerHTML+=`
        <div class="itemCarrito">
            <h4>Producto: ${producto.nombre}</h4>
            <h4>Precio: $${producto.precio}</h4>
            <h4>Cantidad: ${producto.cantidad}</h4>
        </div>`
    }
    carritoContenedor.appendChild(div)
}


const eventoBoton = () =>{
    let botones = document.querySelectorAll(".btnCarrito")
    for (const boton of botones) {
        boton.addEventListener("click",()=>{
            let producto = carrito.find(prod => prod.id == boton.id)
            if(producto){
                producto.cantidad++
            }
            else{
                let producto = Productos.find(prod=> prod.id == boton.id)
                if(producto){
                    let nuevoProducto = {
                        id: producto.id,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        categoria: producto.categoria,
                        imagen: producto.imagen,
                        cantidad: 1,
                    }
                    carrito.push(nuevoProducto)
                }
                
            }
            actualizarCarrito()
        })
    }
    

}
eventoBoton()


