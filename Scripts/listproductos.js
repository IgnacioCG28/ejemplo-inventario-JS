import { inventory } from "./products.js";

export const listProductos = () => {
  const table = document.getElementById("invetory-table");

  inventory.forEach((item) => {
    const row = table.insertCell();

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)

    cell1.innerHTML = item.nombre;

    cell2.innerHTML = item.cantidad;

    cell3.innerHTML = item.precio;

    const deleteButton = document.createElement("button")

    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", () => {
        //Añadir lógica de confirmación de "¿Seguro borrar?". Se accede con item.nombre, item.cantidad e item.precio
    })

    cell4.appendChild(deleteButton);
});
};
