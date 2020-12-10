/*3. El càlcul de la lletra del DNI, és un procés matemàtic senzill, que es basa en obtenir la resta de la divisió sencera entre el 
    DNI i el número 23. A partir de la resta de la divisió sencera, s'obté la lletra seleccionant-la  dins d'un array de lletres. 
    L'array de lletres és:  
    var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
    De manera que: Si la resta és 0 la lletra serà la T, si la resta és 3, la lletra és A.

Escriure un script que faci:

Demanar el número de DNI sense lletra.
Comprovar si està entre 1 i 99999999.
I si està dins l'interval, se mostrarà el DNI amb la lletra.
L'arxiu extern de JavaScript s'anomenarà: "dni.js". */

var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = parseInt(prompt("Escribe tu número del DNI sin la letra"));

if (dni > 1 && dni < 99999999);{
    var posicion = dni%23
    var letra = lletres [posicion]
    alert(dni + letra )
}


