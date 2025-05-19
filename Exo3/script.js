let val1 = prompt("Entrer une 1ère valeur");
let val2 = prompt("Entrer une 2ème valeur");
let val3 = prompt("Entrer une 3ème valeur");

if(val1 == val2 && val1 == val3) {
    console.log("Les 3 valeurs sont identiques");
}else if (val1 == val2 || val1 == val3 || val2 == val3) {
    console.log("Deux des variables sont de valeurs égales.");
    
}else{
    console.log("Les trois variables sont différentes.");
}