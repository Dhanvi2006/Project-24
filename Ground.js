class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,10,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, 10);
    }
  }