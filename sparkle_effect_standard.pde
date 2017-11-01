ParticleSystem particleSystem = new ParticleSystem();

void setup() {
  size(1200, 800);
  stroke(0, 255, 255);
  fill(0, 255, 255);
}

void draw() {
  background(0);
  particleSystem.run();
}

void mousePressed() {
  particleSystem.explodeAtPoint(mouseX, mouseY);
}

void mouseReleased() {
  particleSystem.explodeAtPoint(mouseX, mouseY);
}

class ParticleSystem {
  Particle particles[] = new Particle[8];

  boolean active = false;

  public ParticleSystem() {
    int i;
    for (i = 0; i< 8; i++) {
      particles[i] = new Particle();
      particles[i].setDirection(i);
    }
  }

  public void run() {
    if (isActive()) {
      for (Particle p : particles) {
        p.run();
      }
      determineDeactivation();
    }
  }

  public void explodeAtPoint(float x, float y) {
    if (!isActive()) {
      for (Particle p : particles) {
        p.explode(x, y);
      }
    }
    activate();
  }

  public void determineDeactivation() {
    if (shouldDeactivate()) {
      deactivate();
    }
  }

  public boolean shouldDeactivate() {
    for (Particle p : particles) {
      if (p.isActive()) {
        return false;
      }
    }
    return true;
  }

  public boolean isActive() {
    return active;
  }

  public void activate() {
    active = true;
  }

  public void deactivate() {
    active = false;
  }
}

class Particle {
  float x, y; 
  float initialX, initialY;
  float speedX=0;
  float speedY=0;
  int direction;
  int activationRange = 50;
  float straightSpeed = 5;
  float diagonalSpeed = straightSpeed/sqrt(2);

  boolean active;

  public Particle() {
  }

  public void explode(float x, float y) {
    if (!isActive()) {
      setSpeed();
      this.x = x;
      this.y = y;
      initialX = x;
      initialY = y;
      activate();
    }
  }

  public void run() {
    if (isActive()) {
      move();
      display();
      determineDeactivation();
    }
  }

  public void determineDeactivation() {
    if (isOutOfActivationRange()) {
      deactivate();
    }
  }

  public boolean isOutOfActivationRange() {
    float distX = x - initialX;
    float distY = y - initialY;

    if (sqrt(distX*distX + distY*distY) >= activationRange) {
      return true;
    } else {
      return false;
    }
  }

  public void setSpeed() {
    switch(direction) {
    case 0: 
      speedY = -straightSpeed;
      break;
    case 1:
      speedX = diagonalSpeed;
      speedY = -diagonalSpeed;
      break;
    case 2:
      speedX = straightSpeed;
      break;
    case 3:
      speedX = diagonalSpeed;
      speedY = diagonalSpeed;
      break;
    case 4:
      speedY = diagonalSpeed;
      break;
    case 5:
      speedX = -diagonalSpeed;
      speedY = diagonalSpeed;
      break;
    case 6:
      speedX = -straightSpeed;
      break;
    case 7:
      speedX = -diagonalSpeed;
      speedY = -diagonalSpeed;
      break;
    }
  }

  public void move() {
    x += speedX;
    y += speedY;
  }

  public void display() {
    ellipse(x, y, 2, 2);
  }

  boolean isActive() {
    return active;
  }

  public void activate() {
    this.active = true;
  }

  public void deactivate() {
    this.active = false;
  }

  public void setDirection(int direction) {
    this.direction = direction;
  }

  public int getDirection() {
    return direction;
  }
}