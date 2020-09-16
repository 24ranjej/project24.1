var dustbinB,dustbinL,dustbinR;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	ground = createSprite(700,680,1400,20);
	ground.shapeColor = color("brown");

	dustbinB = createSprite(1000,680,200,20);
	dustbinL = createSprite(900,650,20,100);
	dustbinR = createSprite(1100,650,20,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinB.display();
  dustbinL.display();
  dustbinR.display();
  drawSprites();
 
}



