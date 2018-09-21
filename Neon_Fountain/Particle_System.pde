class ParticleSystem {
  Particle[] particles;
  boolean isActive;
  float x, y;

  ParticleSystem(int numberOfParticles, float gravity) {
    particles = new Particle[numberOfParticles];
    for (int i=0; i < numberOfParticles; i++) {
      particles[i] = new Particle(gravity);
    }
  }

  void run() {
    if (this.isActive) {
      for (Particle p : particles) {
        if( p.y > width ){
          p.initialize(x, y, random(-3.5, 3.5), random(5, 13));
        }
        p.run();
      }
    }
  }

  void activateAt(float x, float y) {
    this.x = x;
    this.y = y;
    int count=0;
    for (Particle p : particles) {
      if(count % 3 == 0){
        p.initialize(x, y, random(-3.5, 3.5), random(5, 13));
      }
      count++;
      //sleep();
    }
    activate();
  }

  void activate() {
    this.isActive = true;
  }

  void deactivate() {
    this.isActive = false;
  }
}
