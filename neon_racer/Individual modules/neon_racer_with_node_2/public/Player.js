function Player(x, y) {
  this.x = x;
  this.y = y;
  this.verticalLength = 20;
  this.horizontalLength = 30;
  this.speed = 5;
  this.shouldMoveRight = false;

  this.run = function () {
    this.move();
    this.display();
  }

  this.display = function () {
    strokeWeight(2);
    stroke(0, 255, 255);
    fill(0);
    triangle(this.x - this.verticalLength / 2, this.y, this.x, this.y - this.horizontalLength, this.x + this.verticalLength / 2, this.y);
  }

  this.move = function () {
    if (this.shouldMoveRight) {
      if ((this.x + this.verticalLength / 2 + this.speed) <= width) {
        this.x += this.speed;
      }
    } else {
      if ((this.x - this.verticalLength / 2 - this.speed) >= 0) {
        this.x -= this.speed;
      }
    }
  }

  this.moveLeft = function () {
    this.shouldMoveRight = false;
  }

  this.moveRight = function () {
    this.shouldMoveRight = true;
  }
}
