class string{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.string=Constraint.create(options)
        this.pointB=pointB
       
        World.add(world, this.string);
      }

      

      display(){
          var pointA= this.string.bodyA.position;
          var pointB= this.pointB
        strokeWeight(3)

        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
}
}