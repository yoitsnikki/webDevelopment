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
