import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

int x;
int firstRectPosition, secondRectPosition, thirdRectPosition;
int rectWidth, rectHeight;

void setup() {
  size(300, 80);
  rectWidth = 80;
  rectHeight = 40;
}

void draw() {
  background(255);
  fill(255);
  firstRectPosition=10;
  rect(firstRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  secondRectPosition = firstRectPosition+rectWidth + 20; 
  rect(secondRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  thirdRectPosition = secondRectPosition+rectWidth + 20; 
  rect(thirdRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  drawText();
}

void drawText() {
  fill(0);
  text("Pause", firstRectPosition + 18, height/2+3);
  text("Play", secondRectPosition + 25, height/2+3);
  text("Stop", thirdRectPosition + 25, height/2+3);
}

void mousePressed() {
  if (mouseX <= firstRectPosition + rectWidth && mouseX >= firstRectPosition && mouseY <= height/2-rectHeight/2 + rectHeight && mouseY >= height/2-rectHeight/2) {
    println("Pause");
    fill(0);
    rect(firstRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  } else if (mouseX <= secondRectPosition + rectWidth && mouseX >= secondRectPosition && mouseY <= height/2-rectHeight/2 + rectHeight && mouseY >= height/2-rectHeight/2) {
    println("Play");
    fill(0);
    rect(secondRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  } else if (mouseX <= thirdRectPosition + rectWidth && mouseX >= thirdRectPosition && mouseY <= height/2-rectHeight/2 + rectHeight && mouseY >= height/2-rectHeight/2) {
    println("Stop");
    fill(0);
    rect(thirdRectPosition, height/2-rectHeight/2, rectWidth, rectHeight);
  } else {
    println("Misc");
  }
}
