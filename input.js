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
