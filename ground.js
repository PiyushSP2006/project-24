class Ground{
    constructor(x,y,width,height){
        var options={
            "restiturion":0.3,
            "density":1.3,
            "isStatic": true,
            friction:0.5
        }


        this.body=Bodies.rectangle(400,350,800,20, options);
        this.width=800;
        this.height=20;
        World.add(world , this.body);
    }
    
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(225);
        rect(pos.x,pos.y,this.width,this.height);
    }

}