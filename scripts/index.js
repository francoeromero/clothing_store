// LISTA DE PRODUCTOS
const productos = [
    //Abrigos
    {
        id: "abrigo-01",
        titulo: "Saco de paño gris",
        imagen: "/img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15000
    },
    {
        id: "abrigo-02",
        titulo: "Camperon beige",
        imagen: "/img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 18200
    },
    {
        id: "abrigo-03",
        titulo: "Tapado negro",
        imagen: "/img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15560
    },
    {
        id: "abrigo-04",
        titulo: "Saco lanilla",
        imagen: "/img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 9000
    },
    {
        id: "abrigo-05",
        titulo: "Campera de pluma rosa",
        imagen: "/img/abrigos/05.jpg",
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
        imagen: "/img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1500
    },
    {
        id: "camiseta-02",
        titulo: "Remera print",
        imagen: "/img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1600
    },
    {
        id: "camiseta-03",
        titulo: "Remera pupera Fila",
        imagen: "/img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 2000
    },
    {
        id: "camiseta-04",
        titulo: "Remera celeste",
        imagen: "/img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1600
    },
    {
        id: "camiseta-05",
        titulo: "Remera degradé",
        imagen: "/img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1200
    },
    {
        id: "camiseta-06",
        titulo: "Remera Under Armour",
        imagen: "/img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 3500
    },
    {
        id: "camiseta-07",
        titulo: "Remera negra Under Armour",
        imagen: "/img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 3500
    },
    {
        id: "camiseta-08",
        titulo: "Básica",
        imagen: "/img/camisetas/08.jpg",
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
        imagen: "/img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4000
    },
    {
        id: "pantalon-02",
        titulo: "Jeans negro",
        imagen: "/img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4500
    },
    {
        id: "pantalon-03",
        titulo: "Jeans azul",
        imagen: "/img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4800
    },
    {
        id: "pantalon-04",
        titulo: "Jeans roturas",
        imagen: "/img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 3900
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón de vestir",
        imagen: "/img/pantalones/05.jpg",
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
    
    // primero vacio el id contenedor de productos del HTML 
    contenedorProductos.innerHTML = "";
    
    // luego hago una iteracion 
    productosElegidos.forEach(producto => {
        // por cada producto creo un div
        const div = document.createElement("div");
        // le agrego las propiedades de CSS de la clase 'producto' al div
        div.classList.add("producto");
        // al div, le creo elementos de HTML y le agrego el contenido segun la lista productos '${}'
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$ ${producto.precio}</p>
            <button class="producto-agregar" id=${producto.id}>Agregar</button>
            </div>
            `;
            // agrego un subelemento del div para que vaya creandose por cada iteracion osea cada producto de la lista
            contenedorProductos.append(div);
        })
        // y llamo ala funcion de los botones agregar, para que se actualizen los botones
        actualizarBotonesAgregar()
    }
    // llamo a la funcion, poniendo como parametro a la lista en general
    // para que se vea todo los productos por defecto
    cargarProductos(productos);
    // let botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    // 2- Creo eventos para todos los botones de las categorias
    // llamo los elementos del DOM que son los botones
    const botonCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    // hago una iteracion que pase por cada boton
    botonCategorias.forEach(boton =>{
    // por cada button se creara un evento "click"
    boton.addEventListener("click", (e) =>{
        // se crea otra iteracion para que se elimine todas las clases CSS active
        botonCategorias.forEach(boton => boton.classList.remove("active"));
        // y una vez eliminado todas las clases active
        //  se agregara la clase CSS active al que se le dio click
        e.currentTarget.classList.add("active");
        // Ahora clasifico los productos segun el id de categorias
        // si no se dio clic el id todos, entonces no se clasificaran los productos 
        if(e.currentTarget.id != "todos"){
            // cambio el titulo principal
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); 
            // y luego llamo especificamente al nombre
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
            //Ahora cada que haga clic en cada item, coincida con la categoria del id de la lista haciendo filtro 
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            // y luego llamo a la funcion de cargar los productos pero con el parametro del filtrado que hice
            cargarProductos(productosBoton);
        } else {
            // sino que se carguen todo el array general y el titulo
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

// 3- Creo funcion agregando los productos al carrito
// cada que se carguen productos nuevos vuelva a agregarse del DOM
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    // creo una iteracion
    botonesAgregar.forEach(boton => {
        // creamos un evento para cada uno con un click se agrega al carrito con una funcion
        boton.addEventListener("click", agregarAlCarrito);
    })
}
// creo la lista del producto en carrito pero haciendo una condicional 
// let productosEnCarrito;
// const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
// if(productosEnCarritoLS){
//     productosEnCarrito = productosEnCarritoLS;
// }else {
//     productosEnCarrito = [];
// }
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
