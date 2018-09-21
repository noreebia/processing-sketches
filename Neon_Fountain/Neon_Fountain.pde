ParticleSystem particleSystem = new ParticleSystem(500, 0.2);

void setup(){
  size(800,600);
  particleSystem.activateAt(width/2, 3 * height/4);
}

void draw(){
  background(0);
  particleSystem.run();
}
