function Wall(){
    this.elements = [];
    this.electricityFields = [];
}

Wall.prototype.run = function(){
    this.display();
    this.runElectricityFields();
}

Wall.prototype.display = function(){
    for(i = 0; i < this.elements.length; i++){
        if(i > 0){
            line(this.elements[i-1].x, this.elements[i-1].y, this.elements[i].x, this.elements[i].y);
        }
    }
}

Wall.prototype.runElectricityFields = function(){
    this.electricityFields.forEach(function(element){
        element.run();
    });
}

Wall.prototype.addElement = function(point){
    this.elements.push(point);

    if(this.elements.length > 1){
        firstPoint = new Point(this.elements[this.elements.length-2].x, this.elements[this.elements.length-2].y);
        secondPoint = new Point(this.elements[this.elements.length-1].x, this.elements[this.elements.length-1].y); 
        this.addElectricityField(firstPoint, secondPoint);
    }
}

Wall.prototype.addElectricityField = function(firstPoint, secondPoint){
    electricityField = new ElectricityField(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y);
    this.electricityFields.push(electricityField);
}

Wall.prototype.removeFirstElement = function(){
    this.elements.shift();
    this.electricityFields.shift();
}