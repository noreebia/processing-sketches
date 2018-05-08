let testElectricityField;
let player = new Player(500,500);
let wall = new Wall();

function setup() {
  createCanvas(800,800);
  wall.addElement(new Point(200,0));
  wall.addElement(new Point(100,150));
  wall.addElement(new Point(200,250));
  wall.addElement(new Point(250,350));
}

function draw() {
  background(0);
  player.run();
  wall.run();
}

function keyPressed() {
  console.log(keyCode + "," + key);
  if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}