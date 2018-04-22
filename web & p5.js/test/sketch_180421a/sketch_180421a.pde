int x=0;

void setup() {
  size(500, 500);
}

void draw() {
  background(x);
  ellipse(width/2, height/2, 50, 50);
}

void keyPressed(){
  if(x == 0){
    x = 255;
  } else{
    x = 0;
  }
}
