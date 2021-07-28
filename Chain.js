class Chain {
    constructor(body1 , body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.7,
            length:3
        }
       this.chain  = Constraint.create(options)
       World.add(world,this.chain)
    }
    display(){
        var ptA = this.chain.bodyA.position
        var ptB = this.chain.bodyB.position
        strokeWeight(3)
        line(ptA.x,ptA.y , ptB.x , ptB.y)
    }
    
}