ParticleSystem particleSystemArray[] = new ParticleSystem[5];

void setup() {
  size(500, 500);
  int i;
  for (i=0; i< particleSystemArray.length; i++) {
    particleSystemArray[i] = new ParticleSystem();
  }
}

void draw() {
  background(0);
  stroke(0, 255, 255);
  for (ParticleSystem ps : particleSystemArray) {
    ps.runParticleSystem();
  }
}

void mousePressed() {
  for (ParticleSystem ps : particleSystemArray) {
    if (ps.getSystemActivationStatus() == false) {
      ps.setSourceOfExplosion(mouseX, mouseY);
      return;
    } else {
      continue;
    }
  }
}

class ParticleSystem {
  Particle particleArray[] = new Particle[50];
  boolean isActivated = false;

  ParticleSystem() {
    int i;
    for (i=0; i< particleArray.length; i++) {
      particleArray[i] = new Particle();
    }
  }

  void activate() {
    isActivated = true;
  }

  void deactivate() {
    isActivated = false;
  }

  void setSourceOfExplosion(int sourceXPosition, int sourceYPosition) {
    if (isActivated) {
      return;
    } else {
      for (Particle p : particleArray) {
        p.setExplosionPosition(sourceXPosition, sourceYPosition);
      }
      activate();
    }
  }

  void determineDeactivation() {
    for (Particle p : particleArray) {
      if (p.getActivationStatus() == true) {
        isActivated = true;
        return;
      }
    }
    deactivate();
  }

  void runParticleSystem() {
    if (isActivated) {
      for (Particle p : particleArray) {
        p.run();
      }
      determineDeactivation();
    } else {
      return;
    }
  }

  boolean getSystemActivationStatus() {
    return isActivated;
  }
}

class Particle {
  float initX, initY, x, y;
  float horizontalSpeed, verticalSpeed;
  float gravity = 1;
  boolean isActivated = false;

  Particle() {
    resetSpeeds();
  }

  void setExplosionPosition(int initX, int initY) {
    if (isActivated) {
      return;
    } else {
      this.initX = initX;
      this.initY = initY;
      x = this.initX;
      y = this.initY;
      activate();
    }
  }

  void activate() {
    isActivated = true;
  }

  void deactivate() {
    resetSpeeds();
    isActivated = false;
  }

  void run() {
    if (isActivated) {
      display();
      applyGravitationalForce();
      determineReset();
    } else {
      return;
    }
  }

  void display() {
    ellipse(x, y, 1, 1);
  }

  void applyGravitationalForce() {
    x = x + verticalSpeed;
    y = y - horizontalSpeed;
    horizontalSpeed -= gravity;
  }

  void determineReset() {
    if (y > initY + random(40, 150)) {
      deactivate();
    }
  }

  void resetSpeeds() {
    horizontalSpeed = random(5, 10);
    verticalSpeed = random(-3, 3);
  }

  boolean getActivationStatus() {
    return isActivated;
  }
}
