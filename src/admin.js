import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getProducts() {
  const allProducts = [];

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    allProducts.push({ ...doc.data(), id: doc.id });
  });

  return allProducts;
}

export async function addProduct(product) {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Recuerda ajustar los IDs de los elementos HTML según tu estructura HTML
const nameInput = document.getElementById("name-input");
const priceInput = document.getElementById("price-input");
const typeInput = document.getElementById("type-input");
const url_1Input = document.getElementById("url_1-input");
const url_2Input = document.getElementById("url_2-input");
const url_3Input = document.getElementById("url_3-input");
const url_4Input = document.getElementById("url_4-input");
const url_5Input = document.getElementById("url_5-input");
const color1Input = document.getElementById("color1-input");
const color2Input = document.getElementById("color2-input");
const color3Input = document.getElementById("color3-input");
const genderInput = document.getElementById("gender-input");
const categoryInput = document.getElementById("category-input");
const descriptionInput = document.getElementById("description-input");
const submitbtn = document.getElementById("submit-btn");

submitbtn.addEventListener("click", uploadProduct);

async function retrieveProducts() {
  const products = await getProducts();
  console.log(products);
}

async function uploadProduct(e) {
  e.preventDefault();

  const newObj = {
    name: nameInput.value,
    category: categoryInput.value,
    type: typeInput.value,
    color1: color1Input.value,
    color2: color2Input.value,
    color3: color3Input.value,
    description: descriptionInput.value,
    gender: genderInput.value,
    price: priceInput.value,
    url_1: url_1Input.value,
    url_2: url_2Input.value,
    url_3: url_3Input.value,
    url_4: url_4Input.value,
    url_5: url_5Input.value,
  };

  await addProduct(newObj);
  await retrieveProducts();
}
