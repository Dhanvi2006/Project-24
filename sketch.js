
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var dustbin, paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(720, 470);
	
	paper = new Paper(100, 410, 15);

    ground = new Ground(400, 495, 800);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  dustbin.display();
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 32, y: -40})
	}
}



