  import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
  import { auth } from "./firebase";

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('contrasena');
  const loginButton = document.getElementById('btn-login');
  const logoutButton = document.getElementById('logout-button');
  const adminButton = document.getElementById('admin-button');

  if (loginButton) {
    loginButton.addEventListener('click', async () => {
      try {
        const email = emailInput.value;
        const password = passwordInput.value;
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        alert('Inicio de sesión exitoso');
        window.location.href = "/";
        // Realiza las acciones adicionales que desees después del inicio de sesión exitoso

        if (user.email === 'admin@gmail.com') {
          adminButton.textContent = 'Admin';
          console.log('eres admin')
          adminButton.style.display = 'block';
          console.log(adminButton)
          adminButton.addEventListener('click', async () => { // Cambio aquí: agregar async al definir la función de manejo del evento
            window.location.href = "./admin.html";
            console.log('redirijo a Admin')
          });
        }
      } catch (error) {
        console.error(error);
        if (error.code === 'auth/user-not-found') {
          alert('El correo electrónico no existe');
        } else if (error.code === 'auth/wrong-password') {
          alert('Contraseña incorrecta');
        } else {
          alert('Error en el inicio de sesión');
        }
      }
    });
  }

  // ...

  // Verificar si el elemento logout-button existe en la página actual
  if (logoutButton) {
    // Función para mostrar el botón de cierre de sesión
    function showLogoutButton() {
      logoutButton.style.display = 'block';
    }

    // Función para ocultar el botón de cierre de sesión
    function hideLogoutButton() {
      logoutButton.style.display = 'none';
    }

    // Escuchar el cambio de estado de autenticación
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario ha iniciado sesión
        showLogoutButton();
        if (user.email === 'admin@gmail.com') {
          adminButton.style.display = 'block'; // Mostrar el botón de administrador si el usuario es admin
        } else {
          adminButton.style.display = 'none'; // Ocultar el botón de administrador si el usuario no es admin
        }
      } else {
        // El usuario no ha iniciado sesión
        hideLogoutButton();
        adminButton.style.display = 'none'; // Ocultar el botón de administrador si el usuario no está logueado
      }
    });

    // Agregar evento de clic al botón de cierre de sesión
    logoutButton.addEventListener('click', async () => {
      try {
        await signOut(auth);
        alert('Has cerrado sesión correctamente');
        // El usuario ha cerrado sesión correctamente
        // Realiza las acciones adicionales que desees después del cierre de sesión
      } catch (error) {
        console.error(error);
        alert('Error al cerrar sesión');
      }
    });
  }

