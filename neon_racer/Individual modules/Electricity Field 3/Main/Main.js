let testElectricityField;
x=0


function setup() {
  createCanvas(1000, 1000);
  testElectricityField = new ElectricityField(0, 0, 100, 100);
}

function draw() {
  background(255);
  line(0, 0, 100, 100);
  testElectricityField.run();
}
