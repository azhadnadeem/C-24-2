var ground;
var ball1;
var dusbin1,dusbin2,dusbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

groundSprite=createSprite(width/2,380,width,10)
groundSprite.shapeColor=color("yellow")

dusbin1=createSprite(800,365,150,10)
dusbin2=createSprite(870,345,10,50)
dusbin3=createSprite(720,345,10,50)
dusbin1.shapeColor=color("white")
dusbin2.shapeColor=color("white")
dusbin3.shapeColor=color("white")

	engine = Engine.create();
	world = engine.world;
ball1=new ball(100,363,25,25)
	//Create the Bodies Here.
  ground=Bodies.rectangle(width/2,380,width,10);
  World.add(world,ground);

  dusbin1=Bodies.rectangle(800,365,150,10,{isStatic:true});
  World.add(world,dusbin1);
  dusbin2=Bodies.rectangle(870,345,10,50,{isStatic:true});
  World.add(world,dusbin2);
  dusbin3=Bodies.rectangle(720,345,10,50,{isStatic:true});
  World.add(world,dusbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    
  }
}
