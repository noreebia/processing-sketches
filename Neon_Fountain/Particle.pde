public class Particle {
  float x, y, verticalSpeed, horizontalSpeed, gravity, size;

  Particle(float gravity) {
    this.gravity = gravity;
    this.size = 2;
  }
  
  void initialize(float x, float y, float verticalSpeed, float horizontalSpeed){
    this.x = x;
    this.y = y;
    this.verticalSpeed = verticalSpeed;
    this.horizontalSpeed = horizontalSpeed;
  }

  void run() {
    move();
    display();
  }

  void move() {
    this.x += verticalSpeed;
    this.y -= horizontalSpeed;
    applyGravity();
  }

  void applyGravity() {
    this.horizontalSpeed -= this.gravity;
  }

  void display() {
    stroke(238,130,238);
    fill(255,0,255);
    ellipse(x, y, size, size);
  }
  
  void setXY(float x, float y){
    this.x = x;
    this.y = y;
  }

}
