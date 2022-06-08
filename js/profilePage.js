import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { capitalize } from "./showCarta.js";

var firebaseConfig = {
    apiKey: "AIzaSyAuOkcu74iEsSSkI7nxllQZmWVRSTmeWx0",
    authDomain: "uya-g2-674ce.firebaseapp.com",
    databaseURL: "https://uya-g2-674ce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uya-g2-674ce",
    storageBucket: "uya-g2-674ce.appspot.com",
    messagingSenderId: "174249225002",
    appId: "1:174249225002:web:ccc6bd049342e282984c53",
    measurementId: "G-ZWMYSP352K"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
var userSelected;
var userData;

$(document).ready(function( event ) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      var data = JSON.parse(JSON.stringify(snapshot.val()));
      console.log(data);
      var userName;
      for (const user in data) {
        if (data[user].login == true) {
          userSelected = user;
          userName = capitalize(user);
          userData = data[user];
          $( "<h2/>", {
            class: "black-text",
            html: userName
          }).appendTo( "#userNameZone" );
          break;
        } 
      }
    } else {
      // $('#incomingUsuario')
      console.log("No data available");
      $( "<a/>", {
        "href": "#",
        html: "Información no encontrada"
      }).appendTo( "#userNameZone" );
    }
  }).catch((error) => {
    console.error(error);
  });
});

document.getElementById("cerrar_sesion").addEventListener("click", closeSesion);

function closeSesion() {
  console.log(userData);
  set(ref(db, 'users/' + userSelected), {
    birthday: userData.birthday,
    dni: userData.dni,
    email: userData.email,
    login: false,
    name: userData.name,
    pago: userData.pago,
    password: userData.password
  })
  .then(() => {
    $( "<p/>", {
      "id": "ok-message",
      html: "Cerrando sesión..."
    }).appendTo( "#contentProfile" );
  })
  .catch((error) => {
    console.log(error);
    $( "<p/>", {
      "class": "red-text",
      "id": "error-message",
      html: "Error"
    }).appendTo( "#login-error-message" );
  });
  setTimeout( function() {window.location.href = "./index.html";}, 1500);
  return
}
