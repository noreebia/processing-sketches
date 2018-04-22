class Ball {
  float horizontalSpeed;
  float verticalSpeed;
  float verticalAcceleration = 0.4;
  int x, y;
  int diameter = 50;
  boolean shouldMoveLeft = false;
  boolean shouldMoveRight = false;

  Ball(int x, int y) {
    this.x = x;
    this.y = y;
  } 

  void run() {
    display();
    move();
    applyGravity();
    bounce();
  }

  void display() {
    ellipse(x, y, diameter, diameter);
  }

  void move() {
    moveLeftAndRight();
    x += horizontalSpeed;
    y += verticalSpeed;
  }

  void moveLeftAndRight() {
    horizontalSpeed = 0;
    if (shouldMoveLeft) {
      horizontalSpeed -= 5;
    } 
    if (shouldMoveRight) {
      horizontalSpeed += 5;
    }
  }

  void applyGravity() {
    verticalSpeed += verticalAcceleration;
  }

  void bounce() {
    if (y + diameter/2 >= height) {
      verticalSpeed = -12;
    }
  }

  void moveRight() {
    shouldMoveRight = true;
  }

  void stopMovingRight() {
    shouldMoveRight = false;
  }

  void moveLeft() {
    shouldMoveLeft = true;
  }

  void stopMovingLeft() {
    shouldMoveLeft = false;
  }
}