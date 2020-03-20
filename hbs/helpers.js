const hbs = require('hbs');
// helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', ( text ) => {
  var palabras = text.split(' ');
  palabras = palabras.map( (palabra) => {
    palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    return palabra;
  });
  return palabras.join(' ');
});