import { createUserWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";
import { auth, db } from "./firebase"; 
import { doc, setDoc } from "firebase/firestore";

const email = document.querySelector('#correo');
const name = document.querySelector('#nombre');
const username = document.querySelector('#usuario');
const password = document.querySelector('#contrasena');
const btn = document.querySelector('#boton-registro');

btn.addEventListener('click',async  () => {
    try {
        const userData = {
            email: email.value,
            username: username.value,
            name: name.value
        };
        await auth.setPersistence(browserLocalPersistence);
        const {user: registeredUser} = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const userDoc = doc(db, 'users', registeredUser.uid);
        await setDoc(userDoc, userData);
        window.localStorage.setItem('userData', JSON.stringify(userData));

        alert('Usuario registrado');
        window.location.href = '/';
    } catch (error) {
        alert(error);
    }
});
