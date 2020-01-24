//run when page is finished loading
$(document).ready(function () {
console.log("Thank you for playing!");

//function that starts the game and contains the logic
playGame = () =>{ 
    console.log("game start!");
    $("#example").html("game stuff can go here");
}

//function that displays the game rules 
showRules = () =>{
    console.log("Rules are:");
}

//function that refreshes the page when clicked. 
restartGame = () => {
    location.reload(true);
}





//end of document.ready function    
})