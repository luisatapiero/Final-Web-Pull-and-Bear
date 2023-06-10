import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4NHqLViSEZmkoBMMNSmEaniCwKy4tCqE",
  authDomain: "pull-bear-web.firebaseapp.com",
  projectId: "pull-bear-web",
  storageBucket: "pull-bear-web.appspot.com",
  messagingSenderId: "440118069526",
  appId: "1:440118069526:web:9c17f20ed471c7cce9e837"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Agrega esta línea para obtener la instancia de Firebase Storage

export { db, auth, storage }; // Agrega `storage` a los elementos exportados


export async function logOut() {

  try {
      await signOut(auth)
  } catch (error) {
      console.error(error)
  };
}

