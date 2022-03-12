const productos = document.getElementById("productos");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

productos.addEventListener("click", (e) => {
  addCarrito(e);
});

const fetchData = async () => {
  try {
    const res = await fetch("productos.json");
    const data = await res.json();
    pintarProductos(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarProductos = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector("h3").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").src = producto.thumbnailUrl;
    templateCard.querySelector("button").dataset.id = producto.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  productos.appendChild(fragment);
};


const addCarrito = (e) => {
  if (
    e.target.classList.contains("btn-producto")
  ) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn-producto").dataset.id,
    title: objeto.querySelector("h3").textContent,
    precio: objeto.querySelector("p").textContent,
    img: objeto.querySelector("img").src,
    cantidad: 1,
  };
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }
  Swal.fire({
    title: 'Producto agregado exitosamente',
    icon: 'success',
    timer:1000,
    timerProgressBar:true,
  })
  carrito[producto.id] = { ...producto };
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
