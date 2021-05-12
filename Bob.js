class Bob {
    constructor(x,y,r){


        this.x=x
        this.y=y
        this.r=r

    var options={
        restitution:0.6,
        friction:0.2,
        density:1,
        isStatic:true
    }


        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);

    }

    display(){
        fill("pink")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,2*this.r,2*this.r);
    }
    

}



