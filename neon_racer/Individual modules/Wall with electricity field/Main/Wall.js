function Wall(){
    this.elements = [];
    this.electricityFields = [];
}

Wall.prototype.run = function(){
    this.display();
    this.runElectricityFields();
}

Wall.prototype.runElectricityFields = function(){
    this.electricityFields.forEach(function(element){
        element.run();
    });
}

Wall.prototype.display = function(){
    for(i = 0; i < this.elements.length; i++){
        if(i > 0){
            line(this.elements[i-1].x, this.elements[i-1].y, this.elements[i].x, this.elements[i].y);
        }
    }
}

Wall.prototype.addElement = function(point){
    this.elements.push(point);

    if(this.elements.length > 1){
        electricityField = new ElectricityField(this.elements[this.elements.length-2].x, this.elements[this.elements.length-2].y, this.elements[this.elements.length-1].x, this.elements[this.elements.length-1].x);
        this.electricityFields.push(electricityField);    
    }
}

Wall.prototype.removeFirstElement = function(){
    this.elements.shift();
    this.electricityFields.shift();
}