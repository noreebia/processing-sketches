function WallSystem(player) {
    this.player = player;

    leftWall = new Wall();
    rightWall = new Wall();

    shouldMoveRight = true;

    minimumWallOffset = this.player.verticalLength / 2;
    maximumWallOffset = 200;

    minimumPointOffset = 20;
    maximumPointOffset = 200;

    scrollSpeed = 2;
    scrolledDistance = 0;
    verticalGapBetweenElements = 50;
    lastPoint = new Point(width / 2, 0);

    this.run = function () {
        this.scroll();

        push();
        translate(0, scrolledDistance);
        leftWall.run();
        rightWall.run();
        pop();
    }

    this.scroll = function () {
        scrolledDistance += scrollSpeed;
    }

    this.addNextPoint = function () {
        let newX;
        if (shouldMoveRight) {
            if (lastPoint.x < maximumPointOffset) {
                newX = lastPoint.x - random(minimumPointOffset, lastPoint.x);
                if (newX < 70) {
                    this.changeDirections();
                }
            } else {
                newX = lastPoint.x - random(minimumPointOffset, maximumPointOffset);
            }
        } else {
            if (lastPoint.x > width - maximumPointOffset) {
                newX = lastPoint.x + random(minimumPointOffset, width - lastPoint.x);
                if (newX > width - 70) {
                    changeDirections();
                }
            } else {
                newX = lastPoint.x + random(minimumPointOffset, maximumPointOffset);
            }
        }
        newY = lastPoint.y + verticalGapBetweenElements;
        nextPoint = new Point(newX, newY);
        this.addNextWallPoints(nextPoint);
        lastPoint = nextPoint;
    }

    this.addNextWallPoints = function (point) {
        let rightWallX;
        if (point.x > width-maximumWallOffset) {
            rightWallX = point.x + random(minimumWallOffset, width - point.x);
        } else{
            rightWallX = point.x + random(minimumWallOffset, maximumWallOffset);
        }

        let leftWallX;
        if (point.x < maximumWallOffset) {
            leftWallX = point.x - random(minimumWallOffset, point.x);
        } else{
            leftWallX = point.x - random(minimumWallOffset, maximumWallOffset);
        }
        rightWall.addElement(new Point(rightWallX, point.y));
        leftWall.addElement(new Point(leftWallX, point.y));
    }

    this.changeDirections = function () {
        shouldMoveRight = !shouldMoveRight;
    }
}