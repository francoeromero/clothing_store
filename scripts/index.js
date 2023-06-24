// LISTA DE PRODUCTOS
const productos = [
    //Abrigos
    {
        id: "abrigo-01",
        titulo: "Saco de paño gris",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15000
    },
    {
        id: "abrigo-02",
        titulo: "Camperon beige",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 18200
    },
    {
        id: "abrigo-03",
        titulo: "Tapado negro",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15560
    },
    {
        id: "abrigo-04",
        titulo: "Saco lanilla",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 9000
    },
    {
        id: "abrigo-05",
        titulo: "Campera de pluma rosa",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 12000
    },
    // camisetas
    {
        id: "camiseta-01",
        titulo: "Remera básica",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1500
    },
    {
        id: "camiseta-02",
        titulo: "Remera print",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1600
    },
    {
        id: "camiseta-03",
        titulo: "Remera pupera Fila",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 2000
    },
    {
        id: "camiseta-04",
        titulo: "Remera celeste",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1600
    },
    {
        id: "camiseta-05",
        titulo: "Remera degradé",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1200
    },
    {
        id: "camiseta-06",
        titulo: "Remera Under Armour",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 3500
    },
    {
        id: "camiseta-07",
        titulo: "Remera negra Under Armour",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 3500
    },
    {
        id: "camiseta-08",
        titulo: "Básica",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1300
    },
    // pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón cargo",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4000
    },
    {
        id: "pantalon-02",
        titulo: "Jeans negro",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4500
    },
    {
        id: "pantalon-03",
        titulo: "Jeans azul",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4800
    },
    {
        id: "pantalon-04",
        titulo: "Jeans roturas",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 3900
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón de vestir",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4500
    }
];
// 1- Cargando los productos desde JS
// selecciono el elemento del DOM contenedor de los productos
const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
// creo la funcion que va a cargar segun la categoria de productos, de la parte main(contenido principal)
function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$ ${producto.precio}</p>
            <button class="producto-agregar" id=${producto.id}>Agregar</button>
            </div>
            `;
            contenedorProductos.append(div);
        })

        actualizarBotonesAgregar()
    }

    cargarProductos(productos);
   
    
    // 2- Creo eventos para todos los botones de las categorias
    // llamo los elementos del DOM que son los botones
    const botonCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    botonCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        botonCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active"); 
        if(e.currentTarget.id != "todos"){
            // cambio el titulo principal
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); 
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
        } else {

            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

// 3- Creo funcion agregando los productos al carrito

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}
// hago una lista vacia de los productos que se agregaran 
// const productosEnCarrito = [];
// creo la funcion carrito, agregue los elementos a la lista
function agregarAlCarrito(e){
    // creo una variable que sea el id del producto
    const idBoton = e.currentTarget.id;
    // y que encuentre el producto que sea igual al id 
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    // condicional
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        // si coincide de nuevo se suma la cantidad
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        // agrego una propiedad cantidad
        productoAgregado.cantidad = 1;
        // y meto en la lista
        productosEnCarrito.push(productoAgregado);
    }  
    // que se actualize el numerito del carrito
    actualizarNumerito()

    // guardo la lista del carrito al local storage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// 4 - creo una funcion para que actualize el numerito del carrito
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerHTML = nuevoNumerito;
}
