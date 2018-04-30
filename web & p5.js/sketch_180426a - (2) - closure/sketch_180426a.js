let innerFunction;
function setup() {
  createCanvas(800, 600);
  innerFunction = drawElectricityField();
}

function draw() {
  background(150);

  line(50, 50, width / 2, height / 2);
  innerFunction(50, 50, width / 2, height / 2);
}

function drawElectricityField() {
  let drawForFrames = 10000;
  let temp = 0;
  let anotherTemp = 0;
  return (x1, y1, x2, y2) => {
    distanceOfLine = sqrt(pow((x2 - x1), 2) + pow((y2 - y1), 2));
    if (temp < drawForFrames) {
      anotherTemp = 0;
    } else {
      anotherTemp = 1;
    }
    //console.log(anotherTemp);

    let oddEvenDistinguisher = anotherTemp;
    let electricityFieldElements = [];

    //electricityFieldElements.push(new Point(x1, y1));
    for (i = 0; i < distanceOfLine; i += 10) {
      oddEvenDistinguisher = (oddEvenDistinguisher + 1) % 2;

      let elementHeight;
      if (oddEvenDistinguisher == 0) {
        elementHeight = random(1, 12);
      } else {
        elementHeight = random(-12, -1);
      }
      let tempPoint = new Point(i, elementHeight);
      electricityFieldElements.push(tempPoint);
    }
    electricityFieldElements.push(new Point(distanceOfLine, 0));
    temp = (temp + 1) % (drawForFrames * 2);

    rotate(atan2((y2 - y1), (x2 - x1)));
    for (k = 0; k < electricityFieldElements.length; k++) {
      if (k > 0) {
        line(electricityFieldElements[k - 1].x, electricityFieldElements[k - 1].y, electricityFieldElements[k].x, electricityFieldElements[k].y);
      }
    }
    console.log(electricityFieldElements[0].x + ", " + electricityFieldElements[0].y);
    //console.log(temp);
  }
}
