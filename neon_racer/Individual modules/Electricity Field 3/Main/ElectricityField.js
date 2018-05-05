function ElectricityField(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

  this.widthBetweenElements=10;
  this.elements = [];
  this.shouldFirstElementBeHigh = true;
  this.framesToRemainStill = 10;

  this.framesLeftUntilChange = this.framesToRemainStill;
}

ElectricityField.prototype.run = function(){
    this.countDownFramesLeftUntilChange();
    console.log(this.shouldElementsChange());

    if(this.shouldElementsChange()){
        this.changeElements();
        this.resetFramesLeftUntilChange();
    }
    this.display();
}

ElectricityField.prototype.countDownFramesLeftUntilChange = function(){
    this.framesLeftUntilChange--;
}

ElectricityField.prototype.resetFramesLeftUntilChange = function(){
    this.framesLeftUntilChange = this.framesToRemainStill;
}

ElectricityField.prototype.shouldElementsChange = function(){
    if(this.framesLeftUntilChange == 0){
        return true;
    }
    return false;
}

ElectricityField.prototype.display = function () {
    push();
    translate(this.x1, this.y1);
    rotate(atan2((this.y2 - this.y1), (this.x2 - this.x1)));
    for(i=0; i < this.elements.length; i++){
        if(i > 0){
            line(this.elements[i - 1].x, this.elements[i - 1].y, this.elements[i].x, this.elements[i].y);
        }
    }
    pop();
}

ElectricityField.prototype.changeElements = function() {
    this.elements = [];

    this.invertField();
    distanceOfLine = Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
    this.elements.push(new Point(0,0));

    let oddEvenFluctuator;
    if(this.shouldFirstElementBeHigh){
        oddEvenFluctuator = 0;
    } else{
        oddEvenFluctuator = 1;
    }
    for(i=this.widthBetweenElements;i < distanceOfLine; i+=this.widthBetweenElements){
        let elementHeight;
        if(oddEvenFluctuator){
            elementHeight = random(2, 12);
        } else{
            elementHeight = random(-2, -12);
        } 
        let point = new Point(i, elementHeight);
        this.elements.push(point);
        oddEvenFluctuator = (++oddEvenFluctuator) %2;
    }
    this.elements.push(new Point(distanceOfLine,0));
}


ElectricityField.prototype.invertField = function(){
    this.shouldFirstElementBeHigh = !this.shouldFirstElementBeHigh;
}
