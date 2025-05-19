function CutTheWord(chaine){
    if (chaine.length < 2) {
        return chaine;
    }else {
        return chaine.slice(1, -1);
    }
}
console.log("Resultat : " + CutTheWord("Simulation"));
