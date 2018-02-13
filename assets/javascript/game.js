$(document).ready(function(){
var firstGem = Math.floor((Math.random()*12) + 1);
var secondGem = Math.floor((Math.random()*12) + 1);
var thirdGem = Math.floor((Math.random()*12) + 1);
var fourthGem = Math.floor((Math.random()*12) + 1);
var targetScore = Math.floor((Math.random()*102) + 19);
var Score = 0;
var wins = 0;
var losses = 0;
$("#targetScore").text(targetScore);

$("#gem1").on("click",function(){
    Score = Score + firstGem;
});

$("#gem2").on("click",function(){
    Score = Score + secondGem;
});

$("#gem3").on("click",function(){
    Score = Score + thirdGem;
});

$("#gem4").on("click",function(){
    Score = Score + fourthGem;
});

$(".gem").on("click", function(){
    console.log(Score);
    $("#currentScore").text(Score);
    if (Score === targetScore){
        wins++
        gamestart();
        $("#wins").text(wins);
        $("#announcement").text("You won!")
    }
    else if(Score > targetScore){
        losses++
        gamestart();
        $("#losses").text(losses);
        $("#announcement").text("You lost!")
    }

});

function gamestart(){
    firstGem = Math.floor((Math.random()*12) + 1);
    secondGem = Math.floor((Math.random()*12) + 1);
    thirdGem = Math.floor((Math.random()*12) + 1);
    fourthGem = Math.floor((Math.random()*12) + 1);
    targetScore = Math.floor((Math.random()*102) + 19);
    Score = 0;
    $("#targetScore").text(targetScore);
    $("#currentScore").text(Score);
    console.log("gem1"+firstGem);
    console.log("gem2"+secondGem);
    console.log("gem3"+thirdGem);
    console.log("gem4"+fourthGem);
    console.log("tscore"+targetScore);
    
}
});