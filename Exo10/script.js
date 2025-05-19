let nombreADeviner = Math.floor(Math.random() * 100) + 1;

let essais = 0;
let trouver = false;
console.log("Devine un nombre entre 1 et 100.");
while(!trouver){
    let proposition = prompt("choisit un nombre aléatoire entre 1 et 100");
    essais++;

    if (proposition > nombreADeviner){
        console.log("Trop grand !");
    }else if (proposition < nombreADeviner){
        console.log("Trop petit !");
    }else{
        console.log("Bravo ! Tu as trouvé le nombre en " + essais + " essais.");
        trouver = true;
    }
} 