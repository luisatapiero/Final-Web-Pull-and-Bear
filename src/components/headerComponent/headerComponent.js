import './headerComponent.css'
import { logOut } from '../../firebase.js';

class HeaderComponent extends HTMLElement {

  constructor() {
    super();



  }

  // This methos is called once the component is created in DOM
  connectedCallback() {
    this.render();

    const navBtn = document.querySelector('.nav-burger');
    const nav = document.getElementById('main-nav');

    navBtn.addEventListener('click', () => {
      navBtn.classList.toggle('hidden');
      nav.classList.remove('hidden')


    });
    nav.addEventListener('click', () => {
      navBtn.classList.remove('hidden');
      nav.classList.toggle('hidden')

    });
  }

  // this is how you declare which props are you interested in
  // Nota: no usar 'title' como atributo pues genera problemas al ser una palabra reservada
  static get observedAttributes() {
    return ['email', 'logged'];
  }

  // this is called when any of the observedAttributes changes
  attributeChangedCallback(propName, oldValue, newValue) {
    console.log('isLogged =>  ', this.logged)
    this[propName] = newValue;
    this.logged = this.getAttribute('logged');
    this.render();
  }

  // this is our main html for the component, and is reRendered when attr changes
  render() {
    this.innerHTML = `
             <header>
    <button class="nav-burger">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11.75C5.58579 11.75 5.25 12.0858 5.25 12.5C5.25 12.9142 5.58579 13.25 6 13.25V11.75ZM18 13.25C18.4142 13.25 18.75 12.9142 18.75 12.5C18.75 12.0858 18.4142 11.75 18 11.75V13.25ZM6 15.75C5.58579 15.75 5.25 16.0858 5.25 16.5C5.25 16.9142 5.58579 17.25 6 17.25V15.75ZM18 17.25C18.4142 17.25 18.75 16.9142 18.75 16.5C18.75 16.0858 18.4142 15.75 18 15.75V17.25ZM6 7.75C5.58579 7.75 5.25 8.08579 5.25 8.5C5.25 8.91421 5.58579 9.25 6 9.25V7.75ZM18 9.25C18.4142 9.25 18.75 8.91421 18.75 8.5C18.75 8.08579 18.4142 7.75 18 7.75V9.25ZM6 13.25H18V11.75H6V13.25ZM6 17.25H18V15.75H6V17.25ZM6 9.25H18V7.75H6V9.25Z" fill="Black"/>
        </svg>
    </button>

    <figure id="logo">
      <img src="https://static.pullandbear.net/2/static2/img/headLogo/logo_pull_black.svg" alt="" />
    </figure>
    <nav class="hidden" id="main-nav">
      <div class="options-menu">
        <ul>
          <li><a class="nav-item-3" href="./index.html">NEW</a></li >
          <li><a class="nav-item-3" href="./sales.html">SALES</a></li >
          <li class="nav-item-3">SHOES</li>
          <li class="nav-item-3">UNISEX</li>
          <li class="nav-item-3">ACCESORIES</li>
        </ul>
      </div>
    </nav>

    <li class="nav-item-3">
      <svg width="18" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M1 9.34555C1.00004 5.76407 3.43972 2.68139 6.82699 1.98282C10.2143 1.28425 13.6057 3.16436 14.9271 6.47331C16.2485 9.78226 15.1319 13.5984 12.2601 15.5879C9.38835 17.5773 5.56133 17.186 3.11958 14.6532C1.7624 13.2454 0.99998 11.3362 1 9.34555Z"
          stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.4766 16.8516L18.5793 20.0692" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </li>

    <li class="nav-item">
      <a class="nav-item" href="./login.html"><svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.885 4.75882C11.885 6.83476 10.2622 8.51765 8.26036 8.51765C6.25854 8.51765 4.63574 6.83476 4.63574 4.75882C4.63574 2.68288 6.25854 1 8.26036 1C10.2622 1 11.885 2.68288 11.885 4.75882Z"
          stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M2.22374 15.8344C2.20857 15.2823 1.74873 14.847 1.19665 14.8622C0.644577 14.8774 0.209328 15.3372 0.224498 15.8893L2.22374 15.8344ZM5.55449 20.2744V19.2744C5.54428 19.2744 5.53406 19.2745 5.52385 19.2749L5.55449 20.2744ZM10.9659 20.2744L10.9965 19.2749C10.9863 19.2745 10.9761 19.2744 10.9659 19.2744V20.2744ZM16.2959 15.8893C16.311 15.3372 15.8758 14.8774 15.3237 14.8622C14.7716 14.847 14.3118 15.2823 14.2966 15.8344L16.2959 15.8893ZM14.2966 15.688C14.3118 16.2401 14.7717 16.6753 15.3237 16.6601C15.8758 16.645 16.3111 16.1851 16.2959 15.633L14.2966 15.688ZM10.9659 11.248V12.248C10.9761 12.248 10.9863 12.2478 10.9965 12.2475L10.9659 11.248ZM5.55452 11.248L5.52387 12.2475C5.53408 12.2478 5.5443 12.248 5.55452 12.248V11.248ZM0.22452 15.633C0.20935 16.1851 0.644599 16.645 1.19668 16.6601C1.74875 16.6753 2.2086 16.2401 2.22377 15.688L0.22452 15.633ZM0.224498 15.8893C0.306616 18.8778 2.63713 21.3643 5.58514 21.2739L5.52385 19.2749C3.82476 19.327 2.27952 17.8642 2.22374 15.8344L0.224498 15.8893ZM5.55449 21.2744H10.9659V19.2744H5.55449V21.2744ZM10.9352 21.2739C13.8832 21.3643 16.2137 18.8778 16.2959 15.8893L14.2966 15.8344C14.2408 17.8642 12.6956 19.327 10.9965 19.2749L10.9352 21.2739ZM16.2959 15.633C16.2138 12.6446 13.8833 10.1581 10.9352 10.2484L10.9965 12.2475C12.6956 12.1954 14.2409 13.6582 14.2966 15.688L16.2959 15.633ZM10.9659 10.248H5.55452V12.248H10.9659V10.248ZM5.58516 10.2484C2.63715 10.1581 0.306638 12.6446 0.22452 15.633L2.22377 15.688C2.27954 13.6582 3.82478 12.1954 5.52387 12.2475L5.58516 10.2484Z"
          fill="#0a0a0a" />
      </svg></a>
    </li>

    <li class="nav-item">
      <div class="cart-notification">3</div>
      <div>
        <div>
          <ul>
            <li class="submenu">
              <svg id="img carrito" alt="carrito" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.78112 7.66929C1.76749 6.63166 2.56708 5.77877 3.56766 5.76367H14.2869C15.2875 5.77877 16.0871 6.63166 16.0734 7.66929V16.2446C16.1013 18.3201 14.5017 20.0262 12.5003 20.0558H5.3542C3.35281 20.0262 1.7533 18.3201 1.78112 16.2446V7.66929Z"
                  stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M12.5005 8.62248V4.81124C12.5283 2.73574 10.9288 1.02961 8.92744 1C6.92605 1.02961 5.32654 2.73574 5.35436 4.81124V8.62248"
                  stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

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
        </li>
        <li class="nav-item">
        <button id="logout-button" style="display: none;">Cerrar sesión</button>
        </li>
      
    </header>

    <script src="../../json.js"></script>

          `;

    const button = this.querySelector('button');
    button.addEventListener('click', () => this.handleButton());

    const logoutButton = this.querySelector('#logout-button');
    if (this.logged) {
      console.log('logueadoooo')
      logoutButton.style.display = 'block';
    } else {
      logoutButton.style.display = 'none';
      console.log('No logueadooo')
    }

    const carrito = this.querySelector('#carrito');
    const carritoBody = this.querySelector('#carrito-body');
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

    carrito.addEventListener('click', () => {
      carrito.classList.toggle('hidden');
    });


  }


  handleButton() {
    console.log('click en el boton');
    if (!this.logged) {
      window.location.replace('/login.html');
    } else {
      logOut();
    }
  }


}

customElements.define('header-component', HeaderComponent);
export default HeaderComponent;