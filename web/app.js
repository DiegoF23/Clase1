console.log("Javascript funcionando");

const tbody = document.getElementById("tbody-productos");

fetch("http://localhost:3000/productos")
  .then((response) => response.json())
  .then((productos) => {
    tbody.innerHTML = "";
    for (let i=0; i < productos.length; i++) {
      tbody.innerHTML += `
        <tr>
          <td> ${productos[i].id } </td>
          <td> ${productos[i].nombre } </td>
          <td> $ ${productos[i].precio } </td>
          <td> 
            <button disabled class="btn-editar"> Editar </button>
            <button disabled class="btn-eliminar"> Eliminar </button>
          </td>
        </tr>  
      `
    }
  })
  .catch((error) => {
    console.error("Error al leer productos.");
  });

console.log(lista);
