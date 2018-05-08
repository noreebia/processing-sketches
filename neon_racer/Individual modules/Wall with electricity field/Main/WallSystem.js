function WallSystem (){
    leftWall = new Wall();
    rightWall = new Wall();


    shouldMoveRight = true;
    widthLimit = 200

    lastPoint;

    this.run = function(){

    }

    this.move = function(){
        if(shouldMoveRight){
            
        }
    }

    this.moveRight = function(){
        shouldMoveRight = true;
    }

    this.moveLeft = function(){
        shouldMoveRight = false;
    }

    this.createNextPoint = function(){
        let nextPoint;
        let 
        if(shouldMoveLeft){
            // newX = 
            // newY =

            nextPoint = new Point(newX, newY);
        } else{

        }
    }


}