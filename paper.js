class Paper{
    constructor(x,y,width,height){
        var options={
            "restiturion":5,
            "density":1.3,
            "isStatic": false,
            friction:0
        }


        this.body=Bodies.circle(25, 150,24, options);
        this.width=24;
        this.height=24;
        World.add(world , this.body);
    }
    
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(225);
        circle(pos.x,pos.y,this.width);
    }

    
}
