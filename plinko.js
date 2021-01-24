class Plinko {

    constructor(x, y, r){
        var options={
            isStatic: true,
           restitution: 0.5,
           friction:0.5,
           density:1.2
        }
        
        this.x=x
        this.y=y
        this.r=10
        this.body = Bodies.circle (this.x,this.y,this.r,options);
        
        World.add(world, this.body);
    }

    display () {
        
        push();  
        translate(this.body.position.x, this.body.position.y);
        ellipseMode (CENTER);
        fill("pink")
        ellipse (0, 0,this.r,this.r);
        pop(); 
      
        
    }
}

