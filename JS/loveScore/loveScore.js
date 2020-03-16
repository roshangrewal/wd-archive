prompt("Type your name: ");
prompt("Type his/her name: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your love score is " +loveScore+ "%" + " And you both are made for each other :) ");
}
if (loveScore > 30 && loveScore <=70 ){
    alert("Your love score is " +loveScore+ "%" + "You may continue..good fit, not great :P ");
}
if (loveScore<=30) {
    alert("Your love score is " +loveScore+ "%" + " You go together like oil and water :( ");
}

// alert("Your love score is " +loveScore+ "%");
