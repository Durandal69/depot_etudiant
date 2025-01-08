alert("Hello World");

// var, let et const : ce sont des façons de déclarer des variables


// var
// les variables déclarés en var sont accessibles partout dans le script, on dit qu'elles ont une portée global (hoisting)
var maVariable; // ceci est une déclaration de variable
maVariable = "Bonjour"; // ceci est une affectation de variable
// = c'est l'opérateur d'affectation ou d'assignation

var uneAutreVariable = "Hello"; // ceci est une déclaration et une affectation de variable. (il mixte les 2 éléments qu'on a au dessus en une)

console.log(maVariable);

test = "test";

console.log(test);


// let
let maVariable2 = "Bonjour"; // la portée est restreinte au scope dans lequel elle est déclarée (block scope)


// const
// (même portée que let)
// permet de déclarer une constante, c'est une variable qu'on ne peut pas réaffecter.

const PI = 3.14;

