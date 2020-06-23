var Voiture = function(marque, couleur){
    this.marque = marque; 
    this.couleur = couleur;
    this.maCouleur = function(){
        console.log("votre voiture est de couleur "+ this.couleur);
    }
}

Voiture.prototype.setCouleur = function(couleur){
    this.couleur=couleur;
}
Voiture.prototype.getMarque = function(){
    return this.marque;
}



mavoiture = new Voiture("Citroen", "grise"); 
mavoiture.maCouleur();
mavoiture.setCouleur("noire");
mavoiture.maCouleur();

/*
if (true) {
    var x = 5;
    console.log(x);
}

if (true) {
    console.log(x);
}
*/

if (true) {
    let x = 5;
    console.log(x);
}
if (true) {
    console.log(x);
}