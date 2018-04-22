Ball ball;
void setup() {
  size(800, 600);
  ball = new Ball(width/2, height/2);
}

void draw() {
  background(0);
  ball.run();
}

void keyPressed() {
  if (keyCode == LEFT) {
    ball.moveLeft();
  }
  if (keyCode == RIGHT) {
    ball.moveRight();
  }
}

void keyReleased() {
  if (keyCode == LEFT) {
    ball.stopMovingLeft();
  }
  if (keyCode == RIGHT) {
    ball.stopMovingRight();
  }
}