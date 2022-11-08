var gamecolors = ["red","blue","green","yellow"];
var gamepattern=[];
var userclickedpattern=[];

var level = 0;
var started = false;



$(document).keypress(function(){
if(!started){
    $("#level-title").text("level "+ level);
    nextSequence();
    started = true;
}
})

$(".btn").click(function(){
    var randomcolor = $(this).attr("id");
    userclickedpattern.push(randomcolor);
    playSound(randomcolor);
    animatePress(randomcolor);

    checkAnswer(userclickedpattern.length-1);
})
function checkAnswer(currentlevel){
  if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
    if(userclickedpattern.length===gamepattern.length){
        setTimeout(function(){
            nextSequence();
        },1000)
    }
  }
  else
  {
    playSound("wrong");
    $("body").addClass("game-over");
    $("level-title").text("game over");
    
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    startOver();
  }
}

function nextSequence(){
  userclickedpattern=[];
  level++;
  $("#level-title").text("level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomchosencolor = gamecolors[randomNumber];
  gamepattern.push(randomchosencolor);
  $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomchosencolor);

}

function startOver(){
  level=0;
  gamepattern=[];
  started = false;
}

function playSound(name){
  var audio = new Audio("https://github.com/ujju308/simons-game/raw/main/sounds/blue.mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
