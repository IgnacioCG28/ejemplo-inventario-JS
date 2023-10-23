import { listProductos } from "./listProductos.js";
import { insertProducts } from "./insertProducts.js";

/**
 *  Autor: Ignacio Carmona González
 *  GitHub: https://github.com/IgnacioCG28/ejemplo-inventario-JS.git
 */

//List of products

document.addEventListener("DOMContentLoaded", listProductos);

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-event");
  btnForm.addEventListener("lick", () => {
    insertProducts();
  });
});
