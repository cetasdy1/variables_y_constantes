let nombre = prompt("ingrese su nombre");
let años_actual = prompt("ingese el año actual");
let año_nacimineto = prompt("ingrese su año de naciomiento");

let saludo = "Hola";
let cadena1 ="tienes";
let cadena2 = "anos";
let cadena3 = ",";

let edad = parseInt(años_actual) - parseInt(año_nacimineto);

let imprimir = saludo + "" + nombre + cadena3 + "" + cadena1 + "" + edad + "" + cadena2;

console.log(imprimir);
