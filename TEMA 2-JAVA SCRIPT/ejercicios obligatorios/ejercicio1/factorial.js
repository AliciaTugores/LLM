/*4. Escriu un script de JavaScript que calculi el factorial dels números sencers que l'usuari vagi escrivint. 
El programa calcularà mitjançant una iteració, fins que l'usuari cancel·li l'execució. L'arxiu extern de JavaScript 
s'anomenarà: "factorial.js".  El factorial es calcularà mitjançant una funció.*/

var num = parseInt(prompt('Introduzca un número:'));
var resultado = 1; 

function factorial (num) {
	for (var i = 1; i <= num; i++) {
        resultado = resultado * i; 
	}
	return resultado
}

alert('El factorial del número ' + num + ' es ' + factorial(num)); 