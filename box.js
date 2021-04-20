class Box {
    constructor(x,y,w,h){
      var option = {restitution:1.0,isStatic:true}
      this.w = w;
      this.h= h
      this.body = Matter.Bodies.rectangle(x,y,w,h,option)
      Matter.World.add(world,this.body)
    }
    
    display(){
      rectMode(CENTER)
      
    fill("hotpink")
    rect(this.body.position.x,this.body.position.y,
         this.w,this.h,2)
    }
  }