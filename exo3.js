// Question 1

var student =  {
    name : "David Rayy",
    class : "VI",
    rollno : 12  };

console.log(student);
delete student.rollno; 
console.log(student);

// Question 2
var Recette = function(nom, portions, ingredients){
    this.name= nom;
    this.portions= portions;
    this.ingredients = ingredients;
    this.Afficher_Recette=function(){
        console.log("nom : "+ this.name); 
        console.log("servies : "+ this.portions); 
        console.log("Ingrédients");
        for(var i=0; i<this.ingredients.length; i++){
            console.log(this.ingredients[i]); 
        }

    }
}

var Quatre_Quarts = new Recette("Quatre-quarts", 8, ["4 oeufs", "250g de Farine", "250g beurre", "250g sucre"]); 
Quatre_Quarts.Afficher_Recette();

// Question 3
var Livre = function(titre, auteur,lu){
    this.titre=titre;
    this.auteur=auteur;
    this.lu=lu;
    this.le_livre_a_t_il_ete_lu= function(){
        if (this.lu){
            console.log("le livre: "+this.titre+" a été lu");
        }
        else {
            console.log("le livre: "+this.titre+" n'a pas été lu");
        }
    }
}

var tab= new Array(); 
tab.push(new Livre("Martine à la plage", "M. Marlier", false));
tab.push(new Livre("Oui Oui à la ferme", "Collectif", true));
tab.push(new Livre("Le manège enchanté", "Collectif", false));

tab[1].le_livre_a_t_il_ete_lu();