class Dustbin
{
    constructor(x,y)
    {
        var options =
        {
            isStatic: true
        }
        this.base = Bodies.rectangle(x, (y+15), 100, 10, options);
        World.add(world, this.base);
        this.sideL = Bodies.rectangle((x-50), y, 10, 50, options);
        World.add(world, this.sideL);
        this.sideR = Bodies.rectangle((x+50), y, 10, 50, options);
        World.add(world, this.sideR);
        
    }

    display()
    {
        fill("white");
        rect(this.base.position.x, this.base.position.y, 100, 10);
        rect(this.sideL.position.x, this.sideL.position.y, 10, 50);
        rect(this.sideR.position.x, this.sideR.position.y, 10, 50);
    }
}