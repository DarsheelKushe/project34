class Rope {
  constructor(bodyA, pointB) {
    var options = {
      stiffness:0.1,
          length:300,
          bodyA:bodyA,
          pointB:pointB
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke(48, 22, 8);
      strokeWeight(4);
      //line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();

      
    }
  }
}


