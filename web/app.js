console.log("Javascript funcionando");

const contenedor = document.getElementById("contenedor-productos");

fetch("http://localhost:3000/productos")
  .then((response) => response.json())
  .then((productos) => {
    let lista = "<ul>";
    for (let i = 0; i < productos.length; i++) {
      lista += `<li>${productos[i].nombre} - $${productos[i].precio}</li>`;
    }
    lista += "</ul>";
    contenedor.innerHTML = lista;
  })
  .catch(error =>{
    console.error("Error al leer productos.")
  });





console.log(lista);
