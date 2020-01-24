//run when page is finished loading
$(document).ready(function () {
console.log("Thank you for playing!");

//function that starts the game and contains the logic
playGame = () =>{ 
    console.log("game start!");
    $("#weapon").html("Chose your weapon:" + "<br />");
    $("#sword").append("<img src='assets/images/sword.png' style='width:100%'>");    
    $("#magic").append("<img src='assets/images/magic.png' style='width:100%'>");
    $("#bow").append("<img src='assets/images/bow.png' style='width:100%'>");
    // $("#example").append("second line");
    // $("#example").append("<br />" + "third line");
}


//function that refreshes the page when clicked. 
restartGame = () => {
    location.reload(true);
}

//user chooses sword as a weapon
swordSelect = () => {
    console.log("you chose the soword!");
}

//user chooses magic as a weapon
magicSelect = () => {
    console.log("you chose to use magic");
}

//user chooses bow as a weapon
bowSelect = () => {
    console.log("you chose to use the bow");
}

//end of document.ready function    
})