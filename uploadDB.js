import { addDoc, collection } from "firebase/firestore";
import getData from "./src/json.js";
import https from "https";
import { db } from "./src/firebase.js";

(async function() {
    /* try {
        let gettingData = await fetch ('https://apimocha.com/pullandbear-productsnew/list');
        let data = await gettingData.json();
        return data
      } catch (error) {
        console.log(error);
      } */
    https.get('https://apimocha.com/pullandbear-productsnew/list', res => {
        let body = [];

        res.on('data', (resData) => {
            body.push(resData);
        });

        res.on('end', () => {
          const data = JSON.parse(Buffer.concat(body).toString());
          console.log(`Subiendo ${data.length} productos a la db`)
          Promise.all(data.map(item => {
            const col = collection(db, 'products');
            return addDoc(col, item);
          })).then(() => console.log("Productos subidos a la db"));
        });
    });
})();