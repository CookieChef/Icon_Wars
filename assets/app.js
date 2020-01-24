//run when page is finished loading
$(document).ready(function () {
console.log("Thank you for playing!");

//function that starts the game and contains the logic
playGame = () =>{ 
    console.log("game start!");
    $("#example").html("first line" + "<br />");
    $("#example").append("second line");
    $("#example").append("<br />" + "third line");
}


//function that refreshes the page when clicked. 
restartGame = () => {
    location.reload(true);
}





//end of document.ready function    
})