// Question 1 : Afficher la date et l'heure 

const date = new Date();
var jour = date.getDay();
switch(jour){
    case 1:
        jour = "lundi"; 
        break;
    case 2:
        jour = "mardi"
        break;
    case 3:
        jour = "mercredi"; 
        break;
    case 4:
        jour = "jeudi"; 
        break;
    case 5:
        jour ="vendredi";
        break;
    case 6:
        jour= "samedi";
    default:
        jour="dimanche"
}

var heure = date.getHours();
var minutes = date.getMinutes();
console.log("Aujourd'hui nous sommes "+ jour +", et il est "+ heure+"H"+minutes);


// Question 2 : Itération de 1 à 100 + Fizz + Buzz + FizzBuzz
function Fizzbuzz(){
    for(var i=1; i<=100;i++){
        if (i%3 == 0){
            if(i%5 ==0){
                console.log("Fizzbuzz");
            }
            else {
                console.log("Fizz");
            }
        }
        else {
            if(i%5 ==0){
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }
}
//Fizzbuzz();

// Question 3 : Tableau avec notes des étudiants - hypothèse : 10 étudiants

function Creer_Tableau(nbre_etudiants){
    var  tab= new Array(nbre_etudiants);
    for(var i=0; i<tab.length; i++){
        tab[i] = Math.floor(Math.random()*20);
    }
    return tab;
}

function Afficher_Tableau(tab){
    document.write('<table cellpadding="5">');
    for (var i=0; i<tab.length; i++){
        document.write('<td>' + tab[i]);
    }
    document.write('</table>');
}


function dix_au_moins(tab){
    var compte =0;
    for (var i=0; i<tab.length; i++){
        if(tab[i]>=10){
            compte++;
        }
    }
    if(compte==1){
        document.write("1 seul élève a une note supérieure ou égale à 10");
    }
    else if (compte==0){
        document.write("Aucun élève n'a une note supérieure ou égale à 10");
    }
    else {
        document.write(compte +" élèves ont une note supérieure ou égale à 10");
    }
}

function moyenne(tab){
    var totale = 0; 
    var moyenne;
    for (var i=0; i<tab.length; i++){
        totale+=tab[i];
    }
    moyenne = Math.floor(totale/tab.length);
    document.write("La moyenne de la classe est de : " + moyenne);
}

function note_max(tab){
    var max = 0;
        for (var i =0; i<tab.length; i++){
            if (tab[i]>max){
                max=tab[i];
            }
    }
    document.write("La meilleure note est : " + max + "/20");
}

function cherche_note(tab, note){
    var j = 0; // permet d'identifier le numéro de l'élève
    for (var i=0; i<tab.length; i++){
        if(tab[i]==note){
            j=i+1;
            document.write("l'élève n°"+j+" a la note de "+ note +"<br>");
        }
    }
    if(j==0){
        document.write("Aucun élève n'a la note de "+ note);
    }
}


function main(){
    var nbre_etudiants = Number(document.getElementById("nbre_etudiants").value);
    var note = Number(document.getElementById("note").value);
    
    if (nbre_etudiants <= 0){
        alert("veuillez saisir un nombre d'édutiants positif")
    }
    else {
        var tab= Creer_Tableau(nbre_etudiants)
        document.write("<br>");
    
        Afficher_Tableau(tab);
        document.write("<br><br>");
    
        dix_au_moins(tab);
        document.write("<br><br>");
    
        moyenne(tab);
        document.write("<br><br>");
    
        note_max(tab);
        document.write("<br><br>");
        

        if (note < 0 || note > 20){
            alert("veuillez saisir une note comprise entre 0 et 20")
        }
        else 
        {
            cherche_note(tab, note);
        }
    }
}
