import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasena');
const loginButton = document.getElementById('btn-login');

loginButton.addEventListener('click', async () => {

    try {

        const email = emailInput.value;
        const password = passwordInput.value;
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        // El usuario ha iniciado sesión correctamente
        console.log(user);
        alert('Inicio de sesión exitoso');
        window.location.href = "/";
        // Realiza las acciones adicionales que desees después del inicio de sesión exitoso
    } catch (error) {
        // Hubo un error durante el inicio de sesión
        console.error(error);
        if (error.code === 'auth/user-not-found') {
            // El correo no existe
            alert('El correo electrónico no existe');
          } else if (error.code === 'auth/wrong-password') {
            // Contraseña incorrecta
            alert('Contraseña incorrecta');
          } else {
            // Otro tipo de error
            alert('Error en el inicio de sesión');
          }
    }
});
