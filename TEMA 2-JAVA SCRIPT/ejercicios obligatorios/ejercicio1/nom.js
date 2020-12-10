/*2. Escriu un script que demani el nom de l'usuari i el visualitzi en una segona finestra, amb el missatge “confirmat”. 
Si l'usuari accepta, s'haurà de mostrar el missatge “nom enregistrat”, i si no accepta es mostrarà el missatge “Nom no enregistrat”. 
L'arxiu extern de Javascript s'anomenarà: "nom.js".*/
    
var name = prompt("A continuación, indique su nombre: ");
window.open(alert("Confirmado"));
var opcion_confir = confirm("Clicka en Aceptar o Cancelar");


if (opcion_confir == true) {
    alert("Nombre registrado");
}
else{
    alert("Nombre no registrado");
}
