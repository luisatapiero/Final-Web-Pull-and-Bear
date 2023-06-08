import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "./firebase"; // Asegúrate de importar `storage` desde firebase.js


const config = {
  // Aquí debes agregar la configuración de tu proyecto de Firebase
};


const email = document.querySelector('#correo');
const name = document.querySelector('#nombre');
const password = document.querySelector('#contrasena');
const fileInput = document.querySelector('#picture-input');
const btn = document.querySelector('#boton-registro');

btn.addEventListener('click', async () => {
  try {
    const userData = {
      email: email.value,
      name: name.value
    };

    const { user: registeredUser } = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const userDoc = doc(db, 'users', registeredUser.uid);
    await setDoc(userDoc, userData);

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileName = file.name;
      const folder = 'profile-pictures';
      const downloadURL = await uploadFile(fileName, file, folder, registeredUser.uid);
      userData.photoURL = downloadURL;
      await setDoc(userDoc, userData, { merge: true });
    }

    window.localStorage.setItem('userData', JSON.stringify(userData));

    alert('Usuario registrado');
    window.location.href = '/';
  } catch (error) {
    alert(error);
  }
});

async function uploadFile(fileName, file, folder, userId) {
    const storageRef = ref(storage, `${folder}/${userId}+${fileName}`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.log("Error al cargar el archivo:", error);
    throw error;
  }
}
