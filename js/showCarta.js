
/*
export function showCarta(data) {
  for (const categoria in data) {
    if (categoria == 'bebidas') {
      showBebidas(data[categoria]);
    }
    if (categoria == 'cafes') {
      showCafes(data[categoria]);
    }
    if (categoria == 'bocadillos') {
      showBocadillos(data[categoria]);
    }
    if (categoria == 'croissants') {
      showCroissants(data[categoria]);
    }
    if (categoria == 'sandwiches') {
      showSandwichs(data[categoria]);
    }
  }
}

export function capitalize(inString) {
  return inString.charAt(0).toUpperCase() + inString.slice(1);
}

function showBebidas(content) {
  let items = [];
  items.push(`<div class="card-image"><img src="../img/bebidas.jpeg" alt="refresco"></div>`);
  items.push(`<div id="catBebidas" class="card-content">`);
  items.push(`<span tabindex="0" class="card-title">Bebidas</span><ul>`);
  console.log(content);
  $.each(content, function(nombre, precio) {
    nombre = capitalize(nombre);
    items.push( `<li> - ${nombre} : ${precio}€</li>`);
  });
  items.push(`</ul></div>`);
  $( "<div/>", {
    "class": "card horizontal  white",
    html: items.join( "" )
  }).appendTo( "#bebidas" );
}

function showCafes(content) {
  let items = [];
  items.push(`<div class="card-image"> <img src="../img/cafe.jpeg" alt="refresco"></div>`);
  items.push(`<div id="catCafes" class="card-content">`);
  items.push(`<span tabindex="0" class="card-title center">Cafes</span><ul>`);
  console.log(content);
  $.each(content, function(nombre, precio) {
    nombre = capitalize(nombre);
    items.push( `<li> - ${nombre} : ${precio}€</li>`);
  });
  items.push(`</ul></div>`);
  $( "<div/>", {
    "class": "card horizontal  white",
    html: items.join( "" )
  }).appendTo( "#cafes" );
}

function showBocadillos(content) {
  let items = [];
  items.push(`<div class="card-image"><img src="../img/bocadillos.jpeg" alt="refresco"></div>`)
  items.push(`<div id="catBocadillos" class="card-content">`);
  items.push(`<span tabindex="0" class="card-title center">Bocadillos</span><ul>`);
  console.log(content);
  $.each(content, function(nombre, precio) {
    nombre = capitalize(nombre);
    items.push( `<li> - ${nombre} : ${precio}€</li>`);
  });
  items.push(`</ul></div>`);
  $( "<div/>", {
    "class": "card horizontal  white",
    html: items.join( "" )
  }).appendTo( "#bocadillos" );
}

function showSandwichs(content) {
  let items = [];
  items.push(`<div class="card-image"><img src="../img/sandwichs.jpeg" alt="refresco"></div>`)
  items.push(`<div id="catSandwichs" class="card-content">`);
  items.push(`<span tabindex="0" class="card-title center">Sandwichs</span><ul>`);
  console.log(content);
  $.each(content, function(nombre, precio) {
    nombre = capitalize(nombre);
    items.push( `<li> - ${nombre} : ${precio}€</li>`);
  });
  items.push(`</ul></div>`);
  $( "<div/>", {
    "class": "card horizontal  white",
    html: items.join( "" )
  }).appendTo( "#sandwichs" );
}

function showCroissants(content) {
  let items = [];
  items.push(`<div class="card-image"><img src="../img/croissant.jpeg" alt="refresco"></div>`)
  items.push(`<div id="catCroissants" class="card-content">`);
  items.push(`<span tabindex="0" class="card-title center">Croissants</span><ul>`);
  console.log(content);
  $.each(content, function(nombre, precio) {
    nombre = capitalize(nombre);
    items.push( `<li> - ${nombre} : ${precio}€</li>`);
  });
  items.push(`</ul></div>`);
  $( "<div/>", {
    "class": "card horizontal  white",
    html: items.join( "" )
  }).appendTo( "#croissants" );
}


*/
