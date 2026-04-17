console.log("Javascript funcionando");

let productos = ["Laptop","Mouse","Teclado","monitor","cpu"];

console.log(productos)

const contenedor = document.getElementById("contenedor-productos");

let lista ="<ul>";

for (let i=0; i < productos.length; i++)
    {
    lista += `<li>${productos[i]}</li>`;
}

lista += "</ul>";

contenedor.innerHTML = lista;

console.log(lista)