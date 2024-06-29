const ejs = require('ejs');

let ch = 'China';

let result = ejs.render('I love you <%= ch %>', {ch: ch});

console.log(result);