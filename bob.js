class Bob{

    constructor(x,y,radius)
    {
     var option={
     restitution:1,
     density:0.2,
     friction:0

     }
      this.body=Bodies.circle(x,y,radius,option)
      World.add(world,this.body)
      this.radius=radius;
    }
    display()
    {
      push ()
      fill("gold")
      ellipseMode(CENTER)
       circle(this.body.position.x,this.body.position.y,this.radius*2)
       pop()

    }


}