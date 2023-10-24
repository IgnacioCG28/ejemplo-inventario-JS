import { inventory } from "./products.js";

export const listProductos = () => {
  //const table = document.getElementById("inventory-table");
  const cleanTable = document.getElementById("clean-table");

  inventory.forEach((item) => {
    const row = cleanTable.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = item.nombre;

    cell2.innerHTML = item.cantidad;

    cell3.innerHTML = item.precio;

    const deleteButton = document.createElement("button");

    deleteButton.innerText = "BORRAR";
    deleteButton.addEventListener("click", () => {
      //Añadir lógica de confirmación de "¿Seguro borrar?". Se accede con item.nombre, item.cantidad e item.precio
      if (confirm(`¿Estás seguro de borrar "${item.nombre}"?`)) {
        const index = inventory.findIndex(product => product.id === item.id);

        if (index !== -1) { // Si el resultado no es -1, tenemos coincidencia
          inventory.splice(index, 1);
        }
      }
      cleanTable.innerHTML = "";
      listProductos();
    });

    cell4.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.innerText = "EDITAR";
    editButton.addEventListener("click", () => {
      //Añadir lógica editar producto. Se accede con item.nombre, item.cantidad e item.precio
    });

    cell4.appendChild(editButton);
  });
};
