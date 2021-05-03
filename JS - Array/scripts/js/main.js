let array = [0,1,2,3,4,5];
//   indices 0 1 2 3 4 5

array[6] = "toto"; // Ajout de valeur par l'index | Valeur dynamique car d'un tableau d'entier, nous ajoutons une valeur texte

array[7] = ["Un","Dos","Tres"];
//let str = array[7].toString();    //Récupère en format string le contenu du tableau en mémoire
console.log(array);
/*
array:
    length : 8,
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : "toto",
    7 : [...]
    length : 3
    0 : "Un"
    1 : "Dos"
        2 : "Tres"
        */
       
array[7][1] = "Deux";
array[7][2] = "Trois";
console.log(array);
array[6] = "titi";
console.log(array);


/**Exemple CSV
 * 
 * NOM|DATE|TIME
 * SAMUEL|21-05-03|16:22
 * JEAN-MICHEL|21-05-03|16:23
 * 
 * 
 */

let tab = [34, 12, 0, 14, 2, 5, 21, 43];

console.log(tab.sort());
console.log(tab.sort(function(a,b){return a-b;}));