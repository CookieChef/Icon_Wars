//run when page is finished loading
$(document).ready(function () {
console.log("Thank you for playing!");

var myHealth = 100;
var enemyHealth = 100;
//function that starts the game and contains the logic
playGame = () =>{ 
    console.log("game start!");
    weaponSelect();
}

//funciton for attack action;
attackAction = () =>{
    var dmgDone = Math.floor(Math.random() * 40) + 1;
    var dmgRecv = Math.floor(Math.random() * 40) + 1;

    var myCurrentHealth = myHealth -= dmgRecv;
    var enemyCurrentHealth = enemyHealth -= dmgDone;
    console.log("damage done: " + dmgDone);
    console.log("damage recieved: " + dmgRecv);
    console.log("my current health: " + myCurrentHealth);
    console.log("enemy current health: " + enemyCurrentHealth);
    if (myCurrentHealth >0 && enemyCurrentHealth>0){
        console.log("keep going");
        console.log("-------------------");
    }else {
        console.log("game over");
        console.log("-------------------");
    }
}

//user chooses sword as a weapon
swordSelect = () => {
    console.log("you chose to use the soword!");
    $("#magic").empty();
    $("#bow").empty();
   
}
opponentSelect = () => {
    $("#opponent").prepend("Now chose your opponent" + "<br />");
    $("#dragon").append("<img src='assets/images/dragon.png' style='width:100%;'>")
    $("#crocodile").append("<img src='assets/images/crocodile.png' style='width:100%;'>")
    $("#gorilla").append("<img src='assets/images/gorilla.png' style='width:100%;'>");
    $("#godzilla").append("<img src='assets/images/monster.png' style='width:100%;'>");
    $("#octopus").append("<img src='assets/images/octopus.png' style='width:100%;'>");
    $("#shark").append("<img src='assets/images/shark.png' style='width:100%;'>");
    $("#snake").append("<img src='assets/images/snake.png' style='width:100%;'>");
}

weaponSelect = () => {
    //once the user clicks on "play" display the elements
    $("#weapon").prepend("Chose your weapon:" + "<br />");
    //add the "<img>" tag to each of the following elements "
    $("#sword").append("<img src='assets/images/sword.png' style='width:100%;'>");    
    $("#magic").append("<img src='assets/images/wizard.png' style='width:100%;'>");
    $("#bow").append("<img src='assets/images/bow.png' style='width:100%;'>");
    $("#charge").append("<img src='assets/images/vs.png' style='width:100%;'>")
    $("#attack").prepend("Attack!");
    $("#attack").append("<img src='assets/images/gloves.png' style='width:100%;'>");
    opponentSelect();
      }

//user chooses magic as a weapon
magicSelect = () => {
    console.log("you chose to use magic");
    $("#sword").empty();
    $("#bow").empty();
}

//user chooses bow as a weapon
bowSelect = () => {
    console.log("you chose to use the bow");
    $("#sword").empty();
    $("#magic").empty();
}

dragonSelect = () => {
    $("#crocodile").empty();
    $("#gorilla").empty();
    $("#godzilla").empty();
    $("#octopus").empty();
    $("#shark").empty();
    $("#snake").empty();
}

crocodileSelect = () => {
    $("#dragon").empty();
    $("#gorilla").empty();
    $("#godzilla").empty();
    $("#octopus").empty();
    $("#shark").empty();
    $("#snake").empty();
}

gorillaSelect = () => {
    $("#crocodile").empty();
    $("#dragon").empty();
    $("#godzilla").empty();
    $("#octopus").empty();
    $("#shark").empty();
    $("#snake").empty();
}

godzillaSelect = () => {
    $("#crocodile").empty();
    $("#gorilla").empty();
    $("#dragon").empty();
    $("#octopus").empty();
    $("#shark").empty();
    $("#snake").empty();
}

octopusSelect = () => {
    $("#crocodile").empty();
    $("#gorilla").empty();
    $("#godzilla").empty();
    $("#dragon").empty();
    $("#shark").empty();
    $("#snake").empty();
}

sharkSelect = () => {
    $("#crocodile").empty();
    $("#gorilla").empty();
    $("#godzilla").empty();
    $("#octopus").empty();
    $("#dragon").empty();
    $("#snake").empty();
}

snakeSelect = () => {
    $("#crocodile").empty();
    $("#gorilla").empty();
    $("#godzilla").empty();
    $("#octopus").empty();
    $("#shark").empty();
    $("#dragon").empty();
}


//function that refreshes the page when clicked or "quit" game. 
restartGame = () => {
    location.reload(true);
}

//end of document.ready function    
})