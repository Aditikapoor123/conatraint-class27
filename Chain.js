class Chain{
    constructor(Body1,Body2){
        var options={
            bodyA:Body1,
            bodyB:Body2,
            length: 100,
            stiffness:0.4

            
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)


    }
    display(){
        var pointA= this.chain.bodyA.position
        var pointB= this.chain.bodyB.position
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}