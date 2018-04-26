
function setup() {
  createCanvas(800, 600);
  background(150);
  // translate(width/2, height/2);
  // line(0, 0, 50, 0);
  // rotate(-PI/4);
  // line(0, 0, 50, 0);
  line(0,0, width/2, height/2);
  drawElectricityField(0,0, width/2, height/2);
}

function draw() {
}

function drawElectricityField(x1, y1, x2, y2) {
  distanceOfLine = sqrt( pow((x2-x1), 2)  + pow((y2-y1), 2));

  let oddEvenDistinguisher = 0;
  let electricityFieldElements = [];
  for (i =0; i < distanceOfLine; i+=10) {
    oddEvenDistinguisher = (oddEvenDistinguisher+1) % 2;

    let elementHeight;
    if (oddEvenDistinguisher == 0) {
      elementHeight = random(3, 12);
    } else {
      elementHeight = random(-12, -3);
    }
    let tempPoint = new Point(i, elementHeight);
    electricityFieldElements.push(tempPoint);
  }
  //electricityFieldElements.push(new Point(x2, y2));
  electricityFieldElements.push(new Point(distanceOfLine, 0));


  rotate(atan2((y2-y1), (x2-x1)));
  for(k = 0; k < electricityFieldElements.length; k++){
    if(k > 0){
      console.log(electricityFieldElements[k].x,electricityFieldElements[k].y);
      line(electricityFieldElements[k-1].x, electricityFieldElements[k-1].y, electricityFieldElements[k].x, electricityFieldElements[k].y);
    }
  }

}
