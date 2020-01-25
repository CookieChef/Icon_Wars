//run when page is finished loading
$(document).ready(function () {
console.log("Thank you for playing!");

//function that starts the game and contains the logic
playGame = () =>{ 
    console.log("game start!");
    //once the user clicks on "play" display the elements
    $("#weapon").prepend("Chose your weapon:" + "<br />");
    //add the "<img>" tag to each of the following elements "
    $("#sword").append("<img src='assets/images/sword.png' style='width:100%;'>");    
    $("#magic").append("<img src='assets/images/wizard.png' style='width:100%;'>");
    $("#bow").append("<img src='assets/images/bow.png' style='width:100%;'>");
}

//user chooses sword as a weapon
swordSelect = () => {
    console.log("you chose to use the soword!");
}

//user chooses magic as a weapon
magicSelect = () => {
    console.log("you chose to use magic");
}

//user chooses bow as a weapon
bowSelect = () => {
    console.log("you chose to use the bow");
}

//function that refreshes the page when clicked or "quit" game. 
restartGame = () => {
    location.reload(true);
}

//end of document.ready function    
})