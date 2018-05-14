let testElectricityField;
let player = new Player(500,500);
let wall = new Wall();
let wallSystem;
let x=0;

function setup() {
  createCanvas(800,800);
  wallSystem = new WallSystem(player);
  wallSystem.addNextPoint();
  wallSystem.addNextPoint();
  wallSystem.addNextPoint();
  wallSystem.addNextPoint();
  wallSystem.addNextPoint();
  wallSystem.addNextPoint();
  // wall.addElement(new Point(0,0));
  // wall.addElement(new Point(50,50));
}

function draw() {
  background(0);
  player.run();
  // wall.run();
  
  wallSystem.run();
  // // push();
  // // translate(0, x);
  // wall.run();
  // // pop();
  // // x++;
}

function keyPressed() {
  if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}