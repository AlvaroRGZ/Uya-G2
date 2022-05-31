//import { getDatabase} from "../node_modules/firebase/database.js";
      //import { initializeApp } from "../node_modules/firebase/firebase-app";
      //import { getAnalytics } from "../node_modules/firebase/firebase-analytics";
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

        $('#botonSolicitar').on("click", function( event ) {  

        console.log(`antes usuario imput= ${$("#usuarioInput").val()}`);
        const userContent = ref(db, 'users/' + 'alvaro');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${$("#usuarioInput").val()}`)).then((snapshot) => {
          if (snapshot.exists()) {
            var data = JSON.parse(JSON.stringify(snapshot.val()));
            console.log(data);
            var items = [];
            $.each(data, function(key, val) {
              if (typeof val === 'object') {
                console.log(val);
                var value = JSON.stringify(val, null, " ");
                $.each(val, function( key2, val2) {
                  items.push( "<li id='" + key2 + "'>" + val2 + "</li>" );
                });
              } else {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
              }
            });
          
            $( "<ul/>", {
              "class": "my-new-list",
              html: items.join( "" )
            }).appendTo( "#incomingUsuario" );
          } else {
            // $('#incomingUsuario')
            console.log("No data available");
            $( "<ul/>", {
              "class": "my-new-list",
              html: "Usuario no registrado"
            }).appendTo( "#incomingUsuario" );
          }
        }).catch((error) => {
          console.error(error);
        });
      });