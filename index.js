let begroet = prompt("Welkom! Wat is je naam?");

alert("Hey "+begroet);
for (let i = 0; i < 5; i++){
let voerNumber = prompt("Voer een nummber in van 0 tot 25 om te beginnen met raden...");

let randomNumber = Math.floor(Math.random() * 4);

if (voerNumber == randomNumber){
alert("Gefeliciteerd je hebt gewonnen");
alert("Speel is klaar! >>> Dag " + begroet);
i = 5;
} else {

    alert("Dit is niet correct! , probeer nog een keer");
}

}
