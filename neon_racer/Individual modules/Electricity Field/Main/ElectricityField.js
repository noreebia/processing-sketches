function ElectricityField(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

  this.widthBetweenElements=10;
  this.elements = [];
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

ElectricityField.prototype.refreshElements = function () {
    oddEvenFluctuator = 0;
    return () => {
        distanceOfLine = Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
        console.log(distanceOfLine);
        this.elements.push(new Point(0,0));
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
}
