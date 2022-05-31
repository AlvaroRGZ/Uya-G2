import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

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
  get(child(dbRef, `carta`)).then((snapshot) => {
    if (snapshot.exists()) {
      var data = JSON.parse(JSON.stringify(snapshot.val()));
      console.log(data);
      var itemsNames = Object.keys(data);
      var items = [];
      itemsNames.forEach((categoria) => {
        items.push( `<li id="cat${categoria} "><h5>${categoria}</h5></li>` );
        $.each(data[categoria], function(nombre, precio) {
          items.push( "<li id='" + nombre + "'>" + `${nombre} : ${precio}` + "</li>" );
        });
      });
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "#infoCartaDesdeBBDD" );
    } else {
      // $('#incomingUsuario')
      console.log("No data available");
      $( "<ul/>", {
        "class": "my-new-list",
        html: "No data available"
      }).appendTo( "#infoCartaDesdeBBDD" );
    }
  }).catch((error) => {
    console.error(error);
  });
});