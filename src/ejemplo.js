import { auth } from "./firebase";


window.addEventListener('load', () => {
    console.log(auth.currentUser);

    if(!auth.currentUser) return;

    const userData = JSON.parse(window.localStorage.getItem('userData'));

    console.log(userData);
});