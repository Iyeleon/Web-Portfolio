//Get navbar into the scene
const nav = document.querySelector('#navbar');
console.log(nav)

const sass = require('sass');

const result = sass.compile("./src/styles.scss");
console.log(result.css);