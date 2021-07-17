class Chain{
    constructor(object1,object2){
    var option={
        bodyA:object1,
        bodyB:object2,
        length:10,
        stiffness:1

    }
    this.chain=Constraint.create(option)
    World.add(world,this.chain)

    }

display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}