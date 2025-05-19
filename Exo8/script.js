let n = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorielle(n){
    if (n<0){
        return "Erreur : n doit être supérieur ou égal à 0";
    }else if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorielle(n - 1);
    }
}

console.log("Le résultat est : " + factorielle(n));
console.log(factorielle(5));

