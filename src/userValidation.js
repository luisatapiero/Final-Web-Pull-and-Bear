//import { logOut } from "../logi";

export function userValidation(userIsSignedIn, email = '') {
    const path = window.location.pathname;
    const header = document.querySelector('header-component');
    const loginItem = document.getElementById('login');
  
    if (!userIsSignedIn) {
      const isHome = path === '/';
      const isLogin = path.includes('login');
      const isSignUp = path.includes('register');
  
      if (header) {
        header.removeAttribute('logged');
        header.removeAttribute('email');
      }
  
      if (!isHome && !isLogin && !isSignUp) {
        window.location.replace('/login/');
      }
  
      // Cambiar el ícono del elemento login al ícono de inicio de sesión
      if (loginItem) {
        console.log('No entiendo')
        loginItem.innerHTML = `
          <a class="nav-item" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="signout"><path fill="#6563FF" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path></svg>
          </a>
        `;
      }
    } else {
      const isLogin = path.includes('login');
      const isSignUp = path.includes('register');
  
      if (isSignUp || isLogin) {
        console.log('will redirect to home');
        window.location.replace('/');
      }
  
      if (header) {
        header.setAttribute('logged', true);
        header.setAttribute('email', email);
      }
  
      // Cambiar el ícono del elemento login al ícono de foto de perfil
      if (loginItem) {
        loginItem.innerHTML = `
          <a class="nav-item" href="#">
            <img src="ruta_de_la_imagen" alt="Foto de perfil" />
          </a>
        `;
      }
    }
  }


  