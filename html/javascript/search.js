String

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let index1 = text.indexOf("locate", 15);
let index2 = text.lastIndexOf("locate");
text.lastIndexOf("locate", 15);
//return -1 if the text is not found.

text.search("locate");
text.match("ain");
text.match(/ain/);
text.match(/ain/g);
text.match(/ain/gi);

text.matchAll("Cats");
text.matchAll(/Cats/g);
text.matchAll(/Cats/gi);

let textq = "Hello world, welcome to the universe.";
textq.includes("world");    return ture;
textq.includes("world", 12); return false;

let textw = "Hello world, welcome to the universe.";
textw.startsWith("Hello");    return ture;
textw.startsWith("world");    return false;
textw.startsWith("world", 6);  return ture; 
text.endsWith("world");         return false;
text.endsWith("world", 11);

Array

