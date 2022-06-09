import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

export function capitalize(inString) {
  return inString.charAt(0).toUpperCase() + inString.slice(1);
}

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
export var userSelected = "";

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
          userSelected = user;
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
        document.getElementById("login-on").style.display = "block";
        document.getElementById("login-off").style.display = "none";
      } else {
        showInfoLoginOff();
        showMenuResponsiveLoginOff();
        document.getElementById("login-on").style.display = "none";
        document.getElementById("login-off").style.display = "block";
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

document.getElementById("confirmPedidos").addEventListener("click", doPedidos);
document.getElementById("confirmPedidos").addEventListener("keypress", doPedidos);

function doPedidos() {
  var element = document.getElementById("error-price");
  if (element != null) {
    element.parentNode.removeChild(element);
  }
  let bebidas = [];
  bebidas.push(document.getElementById("selAgua").value);
  bebidas.push(document.getElementById("selJugo").value);
  bebidas.push(document.getElementById("selRefresco").value);
  bebidas.push(document.getElementById("selTe").value);
  console.log(bebidas);
  let cafes = [];
  cafes.push(document.getElementById("selSolo").value);
  cafes.push(document.getElementById("selCortado").value);
  cafes.push(document.getElementById("selBarraquito").value);
  cafes.push(document.getElementById("selAmericano").value);
  console.log(cafes);
  let bocadillos = [];
  bocadillos.push(document.getElementById("selMixtoBoc").value);
  bocadillos.push(document.getElementById("selPolloBoc").value);
  bocadillos.push(document.getElementById("selSerranoBoc").value);
  bocadillos.push(document.getElementById("selTortillaBoc").value);
  console.log(bocadillos);
  let sandwiches = [];
  sandwiches.push(document.getElementById("selMixtoSand").value);
  sandwiches.push(document.getElementById("selPolloSand").value);
  sandwiches.push(document.getElementById("selSerranoSand").value);
  sandwiches.push(document.getElementById("selAtunSand").value);
  console.log(sandwiches);

  const bebidas_price = [1, 1.80, 2, 1];
  const cafes_price = [0.5, 0.80, 1, 1.20];
  const bocadillos_price = [1, 1.20, 1.70, 1.60];
  const sandwiches_price = [1, 1.20, 1.70, 1.30];

  let total_price = 0;
  let index = 0; 

  for (const units of bebidas) {
    total_price += parseFloat(units) * bebidas_price[index];
    index++;
  }
  index = 0; 
  for (const units of cafes) {
    total_price += parseFloat(units) * cafes_price[index];
    index++;
  }
  index = 0; 
  for (const units of bocadillos) {
    total_price += parseFloat(units) * bocadillos_price[index];
    index++;
  }
  index = 0; 
  for (const units of sandwiches) {
    total_price += parseFloat(units) * sandwiches_price[index];
    index++;
  }
  console.log(total_price);

  if (total_price == 0) {
    $( "<p/>", {
      id: "error-price",
      tabindex: "0",
      "aria-live": "assertive",
      "class": "red-text",
      html: `No se puede realizar un pedido de 0 euros`
    }).appendTo( "#recount-total-price" );
  } else {
    document.getElementById("login-on").style.display = "none";
    document.getElementById("login-off").style.display = "none";
  
    let insert = `<div class="col s12 m6 l12">`;
    insert += `<p tabindex="0">Se ha realizado el pedido correctamente. Podrá recogerlo en nuestra tienda en un tiempo de 10-25 min aprox.</p>`;
    insert += `<br><p tabindex="0">Precio Total del Pedido: ${total_price} €</p>`;
    insert += `</div>`;
    $( "<div/>", {
      "class": "row",
      html: insert
    }).appendTo( "#pedidoDone" );
  }
}

document.getElementById("selAgua").addEventListener("click", recount);
document.getElementById("selAgua").addEventListener("keypress", recount);
document.getElementById("selJugo").addEventListener("click", recount);
document.getElementById("selJugo").addEventListener("keypress", recount);
document.getElementById("selRefresco").addEventListener("click", recount);
document.getElementById("selRefresco").addEventListener("keypress", recount);
document.getElementById("selTe").addEventListener("click", recount);
document.getElementById("selTe").addEventListener("keypress", recount);
document.getElementById("selSolo").addEventListener("click", recount);
document.getElementById("selSolo").addEventListener("keypress", recount);
document.getElementById("selCortado").addEventListener("click", recount);
document.getElementById("selCortado").addEventListener("keypress", recount);
document.getElementById("selBarraquito").addEventListener("click", recount);
document.getElementById("selBarraquito").addEventListener("keypress", recount);
document.getElementById("selAmericano").addEventListener("click", recount);
document.getElementById("selAmericano").addEventListener("keypress", recount);
document.getElementById("selMixtoBoc").addEventListener("click", recount);
document.getElementById("selMixtoBoc").addEventListener("keypress", recount);
document.getElementById("selPolloBoc").addEventListener("click", recount);
document.getElementById("selPolloBoc").addEventListener("keypress", recount);
document.getElementById("selSerranoBoc").addEventListener("click", recount);
document.getElementById("selSerranoBoc").addEventListener("keypress", recount);
document.getElementById("selTortillaBoc").addEventListener("click", recount);
document.getElementById("selTortillaBoc").addEventListener("keypress", recount);
document.getElementById("selMixtoSand").addEventListener("click", recount);
document.getElementById("selMixtoSand").addEventListener("keypress", recount);
document.getElementById("selPolloSand").addEventListener("click", recount);
document.getElementById("selPolloSand").addEventListener("keypress", recount);
document.getElementById("selSerranoSand").addEventListener("click", recount);
document.getElementById("selSerranoSand").addEventListener("keypress", recount);
document.getElementById("selAtunSand").addEventListener("click", recount);
document.getElementById("selAtunSand").addEventListener("keypress", recount);

function recount() {
  var element = document.getElementById("total-price");
  if (element != null) {
    element.parentNode.removeChild(element);
  }
  let bebidas = [];
  bebidas.push(document.getElementById("selAgua").value);
  bebidas.push(document.getElementById("selJugo").value);
  bebidas.push(document.getElementById("selRefresco").value);
  bebidas.push(document.getElementById("selTe").value);
  console.log(bebidas);
  let cafes = [];
  cafes.push(document.getElementById("selSolo").value);
  cafes.push(document.getElementById("selCortado").value);
  cafes.push(document.getElementById("selBarraquito").value);
  cafes.push(document.getElementById("selAmericano").value);
  console.log(cafes);
  let bocadillos = [];
  bocadillos.push(document.getElementById("selMixtoBoc").value);
  bocadillos.push(document.getElementById("selPolloBoc").value);
  bocadillos.push(document.getElementById("selSerranoBoc").value);
  bocadillos.push(document.getElementById("selTortillaBoc").value);
  console.log(bocadillos);
  let sandwiches = [];
  sandwiches.push(document.getElementById("selMixtoSand").value);
  sandwiches.push(document.getElementById("selPolloSand").value);
  sandwiches.push(document.getElementById("selSerranoSand").value);
  sandwiches.push(document.getElementById("selAtunSand").value);
  console.log(sandwiches);

  const bebidas_price = [1, 1.80, 2, 1];
  const cafes_price = [0.5, 0.80, 1, 1.20];
  const bocadillos_price = [1, 1.20, 1.70, 1.60];
  const sandwiches_price = [1, 1.20, 1.70, 1.30];

  let total_price = 0;
  let index = 0; 

  for (const units of bebidas) {
    total_price += parseFloat(units) * bebidas_price[index];
    index++;
  }
  index = 0; 
  for (const units of cafes) {
    total_price += parseFloat(units) * cafes_price[index];
    index++;
  }
  index = 0; 
  for (const units of bocadillos) {
    total_price += parseFloat(units) * bocadillos_price[index];
    index++;
  }
  index = 0; 
  for (const units of sandwiches) {
    total_price += parseFloat(units) * sandwiches_price[index];
    index++;
  }
  console.log(total_price);

  $( "<p/>", {
    id: "total-price",
    tabindex: "0",
    "aria-live": "assertive",
    html: `Precio Total Actual : ${total_price} euros`
  }).appendTo( "#recount-total-price" );
}