import { listProductos } from "./listProductos.js";
import { inventory } from "./products.js";

export const insertProducts = () => {
  const productForm = document.getElementById("inventory-tab-form");
  productForm.addEventListener("submit", function (event) {
    // Le quitamos las propiedades a la etiqueta form
    event.preventDefault();

    //Capturar los valores introducidos por el usuario
    const productName = document.getElementById("product-name").value;
    const productQty = parseInt(document.getElementById("product-qty").value);
    const productPrice = parseFloat(
      document.getElementById("product-price").value
    );
    // Validar campos que no estén vacíos

    if (productName && !isNaN(productQty) && !isNaN(productPrice)) {
      const newProduct = {
        id: inventory.length + 1,
        nombre: productName,
        cantidad: productQty,
        precio: productPrice,
      };
      // Añadir producto
      inventory.push(newProduct);

      // Limpiar los campos del formulario
      productForm.reset();

      listProductos();
      
    } else {
        alert("Datos erroneos.")
    }
  });
};
