import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer player;
FFT fft;

int spectrumWidth;
int i;

void setup() {
  size(512, 400);
  minim = new Minim(this);
  player = minim.loadFile("Hey Ice King! Why'd You Steal Our Garbage.mp3");
  fft = new FFT(player.bufferSize(), 512);
  player.play();
  player.loop();
  spectrumWidth=5;
}

void draw() {
  background(0);
  fft.forward(player.mix);
  drawSpectrum();
}


void drawSpectrum() {
  fill(0, 191, 255);
  stroke(0);
  for (i=0; i<fft.specSize(); i=i+5) {
    if (fft.getBand(i)*4 > 200) {
      rect(i, height/2-150, spectrumWidth, 200);
      rect(i, height/2, spectrumWidth, 200);
    } else {
      rect(i, height/2-fft.getBand(i)*4, spectrumWidth, fft.getBand(i)*4);
      rect(i, height/2, spectrumWidth, fft.getBand(i)*4);
    }
  }
}
