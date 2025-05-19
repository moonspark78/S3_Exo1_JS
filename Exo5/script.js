let nombre = prompt("Entrez un nombre");
let etat = prompt("pair ou impair ?")

/* if (etat == "pair") {
    for (let i = 0; i <= nombre; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}else{
    for (let i = 0; i <= nombre; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
} */

for (let i = 0; i <= nombre; i++) {
    if ((etat === "pair" && i % 2 === 0) || (etat === "impair" && i % 2 !== 0)) {
        console.log(i);
    }
}

