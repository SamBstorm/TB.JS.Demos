let str = "Hello les Dot net de Technobel!"

console.log(str.charAt(4)) //o étant le 5ième caractères
console.log(str.charCodeAt(4)) // 
console.log(str.concat("!!!!")) //Hello les Dot net de Technobel!!!!!    Concaténation sur notre texte de base
console.log(String.fromCharCode(114)) //1 caractère
console.log(String.fromCharCode(114,121,64)) //3 caractères
console.log(str.indexOf("o")); //4 est le premier "o" dans la chaine de caractère
console.log(str.lastIndexOf("o")); //26 est le dernier "o" dans la chaine de caractère

console.log(str.indexOf("net")); //14 est le premier index du groupe de caractère "net" dans la chaine de caractère
console.log(str.indexOf("z")); //-1 indique un index impossible à atteindre

str = "sam@fait.rir";

console.log(str.match(new RegExp(/^[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/)));
str = str.replace(/i/,'u');
str = str.replace('i','u');
console.log(str);

console.log(str.slice(str.indexOf('@'),str.length));


let tab = ["Nom","Prenom","Age"];
let tab_str = tab.join('|');
console.log(tab_str);

console.log(tab_str.split('|'));

str = "Salut les amis. Comment ça va?";
console.log(str.split(' ').length);