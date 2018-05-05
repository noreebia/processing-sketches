var player;
function setup() {
  createCanvas(800, windowHeight);
  stroke(2);
  player = new Player(width/2, height/5 * 3.5);
}

function draw() {
  background(0);
  fill(255);
  player.run();
}

function keyPressed() {
  console.log(keyCode + "," + key);
  if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}
