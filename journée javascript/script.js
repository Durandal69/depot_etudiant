// debugger;

// créer une fonction qui prend en paramètre un nombre
// et qui calcule le carré de ce nombre
// afficher le résultat dans la console et dans une alerte

// l'appel de cette fonction doit être déclenché par un click sur un bouton dans le fichier html

// function eleveAuCarre(nombre) {
//     const result = nombre * nombre;
//     console.log(result);
//     alert(result);
// }

// Créer une fonction qui récupère la référence du tableau et la stocke dans une variable
// Cette fonction doit etre appelée au click sur un bouton dans le fichier html


function getTableau() {
    let tableau = document.getElementById("tableau_1");
    console.log(tableau);


// tableau est une référence vers l'élément html
// une variable qui permet de manipuler le contenu de l'élément html
// par le biais de javascript

// Créer une ligne dans le tableau
let row = tableau.insertRow();

// Créer une cellule dans la ligne
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);

const name = prompt("Entrez votre nom");
const job = prompt("Entrez votre job");
const age = prompt("Entrez votre age");

// Ajouter du contenu dans la cellule
cell1.textContent = name;
cell2.textContent = job;
cell3.textContent = age;


}

