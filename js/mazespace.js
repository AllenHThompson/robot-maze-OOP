"use strict";

function MazeSpace(directions) {

     for (var i = 0; i < directions.length; i += 1) {
          this[directions[i]] = false;
     }
}

MazeSpace.prototype.setWall = function (direction) {
     this[direction] = true;
};

// this.north = false;
// this.east = false;
// this.south = false;
// this.west = false;
