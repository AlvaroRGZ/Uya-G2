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

$(document).ready(function( event ) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      var data = JSON.parse(JSON.stringify(snapshot.val()));
      console.log(data);
      var login_on = false;
      var userName;
      for (const user in data) {
        if (data[user].login == true) {
          userName = user;
          login_on = true;
          break;
        } else {
          login_on = false;
        }
      }
      if (login_on) {
        showUserLoginOn(userName);
        showMenuResponsiveLoginOn(userName);
      } else {
        showInfoLoginOff();
        showMenuResponsiveLoginOff();
      }
    } else {
      // $('#incomingUsuario')
      console.log("No data available");
      $( "<a/>", {
        "href": "#",
        html: "Información no encontrada"
      }).appendTo( "#login-status" );
    }
  }).catch((error) => {
    console.error(error);
  });
});

function showUserLoginOn(userName) {
  let name = capitalize(userName);
  let item = `<a href="./profile.html">${name}</a>`;
  $( "<li/>", {
    class: "white-text",
    html: item
  }).appendTo( "#login-status" );
}

function showMenuResponsiveLoginOn(userName) {
  let name = capitalize(userName);
  let item = `<a href="./profile.html">${name}</a>`;
  $( "<li/>", {
    class: "white-text",
    html: item
  }).appendTo( "#menu-responsive" );
}

function showInfoLoginOff() {
  let item = `<a href="./register.html">Registrarse</a>`;
  let item2 = `<a href="./login.html">Iniciar Sesion</a>`;
  $( "<li/>", {
    class: "white-text",
    html: item
  }).appendTo( "#login-status" );
  $( "<li/>", {
    class: "white-text",
    html: item2
  }).appendTo( "#login-status" );
}

function showMenuResponsiveLoginOff() {
  let item = `<a href="./register.html">Registrarse</a>`;
  let item2 = `<a href="./login.html">Iniciar Sesion</a>`;
  $( "<li/>", {
    class: "white-text",
    html: item
  }).appendTo( "#menu-responsive" );
  $( "<li/>", {
    class: "white-text",
    html: item2
  }).appendTo( "#menu-responsive" );
}