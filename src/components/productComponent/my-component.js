    export default class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos CSS para el componente */
        </style>
        <div id="carrito">
          <table id="lista-carrito">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="carrito-body"></tbody>
          </table>
          <a href="#" id="vaciar-carrito" class="btn-3">Vaciar Carrito</a>
        </div>
      `;
    }
  
    connectedCallback() {
      this.renderCart();
    }
  
    renderCart() {
      const carritoBody = this.shadowRoot.getElementById('carrito-body');
      const products = JSON.parse(localStorage.getItem('cart-products')) || [];
    
      carritoBody.innerHTML = ''; // Limpiar el contenido existente
    
      products.forEach((product) => {
        const row = document.createElement('tr');
    
        const imageCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
    
        imageCell.innerHTML = `<img src="${product.imagen}" alt="${product.name}" width="50" height="50">`;
        nameCell.textContent = product.name;
        priceCell.textContent = product.precio;
    
        row.appendChild(imageCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
    
        carritoBody.appendChild(row);
      });
    }
  }
  
  customElements.define('my-component', MyComponent);