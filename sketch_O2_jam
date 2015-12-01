Conductor conductor;

void setup() {
  size(500, 800);
  conductor = new Conductor();
}

void handleCollision() {
  conductor.handleCollision();
}

void draw() {
  background(0);
  stroke(0, 255, 255);
  drawLines();
  thread("handleCollision");
  conductor.run();
}

void drawLines() {
  line(100, 0, 100, height);
  line(200, 0, 200, height);
  line(300, 0, 300, height);
  line(400, 0, 400, height);
  line(0,height-20,width,height-20);
}

class Conductor {
  int counter;
  float firstTimer, secondTimer;
  boolean doesCollide;
  ArrayList<MusicalBlock> blocks;

  Conductor() {
    counter = 0;
    firstTimer = millis();
    blocks = new ArrayList<MusicalBlock>();
  }

  void run() {
    for (MusicalBlock mb : blocks) {
      mb.fall();
      mb.display();
      mb.resetBlock();
    }
    manageBlockCount();
  }

  void manageBlockCount() {
    secondTimer = millis();
    if (secondTimer - firstTimer >= 1000) {
      addBlock();
      firstTimer = secondTimer;
    }
  }

  void handleCollision() {
    for (MusicalBlock innerBlock : blocks) {
      for (MusicalBlock outerBlock : blocks) {
        if (innerBlock == outerBlock) {
          continue;
        }
        if (innerBlock.getY() + innerBlock.blockHeight <= (outerBlock.getY() + outerBlock.blockHeight) && innerBlock.getY()+innerBlock.blockHeight >= outerBlock.getY() &&  innerBlock.getX() == outerBlock.getX()) {
          innerBlock.initializeBlock();
        }
      }
    }
  }

  void addBlock() {
    if (blocks.size() != 15) {
      blocks.add(new MusicalBlock());
    }
  }
}

class MusicalBlock {
  float x, y;
  int blockWidth, blockHeight;
  float colorR, colorG, colorB;

  MusicalBlock() {
    blockWidth = 100;
    blockHeight = 20;
    initializeBlock();
  }

  void initializeBlock() {
    y=random(-30, -20);
    generateLane();
    generateColor();
  }

  void generateLane() {
    x = (int)random(5) * 100;
  }

  void generateColor() {
    colorR = random(50, 255);
    colorG = random(50, 255);
    colorB = random(50, 255);
  }

  void display() {
    noStroke();
    fill(colorR, colorG, colorB);
    rect(x, y, blockWidth, blockHeight,7);
  }

  void fall() {
    y = y+5;
  }

  void resetBlock() {
    if ( y > height) {
      initializeBlock();
    }
  }

  float getX() {
    return x;
  }

  float getY() {
    return y;
  }
}
