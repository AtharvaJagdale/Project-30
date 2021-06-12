class Roof{
constructor()
{
  

  this.body=Bodies.rectangle(400,100,800,400,{isStatic:true})
 World.add(world,this.body)
 this.image=loadImage("images/roof.png")
}
display()
{
  push()
imageMode(CENTER)
 image(this.image,this.body.position.x,this.body.position.y,800,400)
 pop()
}

}