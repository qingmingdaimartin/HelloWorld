const uniq = require('uniq');
/* const uniq = require('./node_modules/uniq'); */

let arr = [1,2,3,4,5,4,3,2,1];

const result = uniq(arr);

console.log(result);