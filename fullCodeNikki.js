
// define the canvas
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.strokeStyle = "#000000";

// define variables to use in the rest of the program
let canvasWidth = myCanvas.width;
let canvasHeight = myCanvas.height;

// array for levels
let level = [15, 10, 5];

// define variables for my circle
let x = 350;
let y = 15;
let radius = 20;
let color = "green";
gameLevel = level[0];

//draw the circle
function makeCircle(x, y, radius, color) {
// pick variables for the different elements
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  // draw the circle using the variables described above
  this.draw = function () {

    ctx.beginPath();
    ctx.arc (this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.stroke();

    ctx.fillStyle = this.color; // which color my circle is
    ctx.fill();
  }

}

// make the circle to start with
let newCircle = new makeCircle(x, y, radius, color);

// EASY LEVEL
function easyGame () {
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  gameLevel = level[0]; // game level picks how fast the ball will move down
}

// MEDIUM LEVEL
function mediumGame () {
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  gameLevel = level[1]; // the game level becomes bigger as the game gets harder
}

// HARD LEVEL
function hardGame () {
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  gameLevel = level[2];
}

// the word that is typed into the textbox is displayed
let wordDivisionVar = document.getElementById("wordDivision");

// the list of words for typing up
wordList = ["cow", "dog", "cat", "create", "words", "hard", "annoying", "help",
"no", "superlicious", "candy", "people", "this", "phone", "hourglass", "headphones",
"notebook", "digital", "fortress", "angles", "demons", "angels"];

// code for getting the input from the textbox
let textboxInput = document.getElementById("word");

// variable for keeping track of i outside of i
let a = 0;

// variable for telling if the word is wordCorrect
let wordCorrect = false; // is the word you type correct or not

// takes the text and as long as enter was clicked, acts like the button was clicked
textboxInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    // run the enter button and clear the textbox
    document.getElementById("enterButton").click();
    document.getElementById("word").value="";
  }
});

// the function that checks whether words are right or not
function checkWords() {
  wordCorrect=false;
  console.log(textboxInput.value);
  console.log("checking words");

  // if the word is correct then
  if (textboxInput.value == wordList[a]) {
    console.log("setting word correct to true");
    wordCorrect = true;
  }

  // if the word correct is true then
  if (wordCorrect == true) {
    console.log("it's correct!");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    y += gameLevel;
    newCircle = new makeCircle(x, y, radius, color);
    newCircle.draw();
    wordDivisionVar.innerHTML = wordList[a+1];
    a = a+1;
  }
  // if word correct is false then
  else if (wordCorrect == false){
    console.log("it's incorrect!");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    y -= gameLevel;
    newCircle = new makeCircle(x, y, radius, color);
    newCircle.draw();
    wordDivisionVar.innerHTML = wordList[a];
  }
}
