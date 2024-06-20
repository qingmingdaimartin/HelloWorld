forEach();

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;}


const newArr = myArr.flatMap((x) => x * 2);

const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

const numbers = [45, 4, 9, 16, 25];
let sum1 = numbers.reduce(myFunction);
let sum2 = numbers.reduce(myFunction, 100);
let sum3 = numbers.reduceRight(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}



let allOver18 = numbers.every(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}   return false;


let someOver18 = numbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}   return true;

Array.from();

Array.keys();


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

