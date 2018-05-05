
function setup() {
  createCanvas(1000,1000);
  line(0,0,100,100);
  let testElectricityField = new ElectricityField(0, 0, 100, 100);
  console.log(testElectricityField.elements.length);
  let test = testElectricityField.refreshElements();
  test();
  console.log(testElectricityField.elements);
  testElectricityField.display();
}

function draw() {
}
