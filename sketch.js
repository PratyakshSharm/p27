
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bo2ies;
const Body = Matter.Body3
const Constraint = Matter. Constraint;4
var bobObject5,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;3
	//Create the Bodie4 Here.
	roof=new Roof(200,500,500,20)
	bobObject1=new Bob(100,400,30);
	 bobObject2=new Bob(160,400,30);
	 bobObject3=new Bob(220,400,30);
	  bobObject4=new Bob(280,400,30);
	  bobObject5=new Bob(340,400,30);

	  rope1=new Rope(bobObject1.body,roof.body,-30*2,0);
	//    rope1=new Rope(bobObject2.body,roof.body,-20*2,0);
	//    rope1=new Rope(bobObject3.body,roof.body,-40*2,0);
	//    rope1=new Rope(bobObject4.body,roof.body,-50*2,0);
	//    rope1=new Rope(bobObject5.body,roof.body,-60*2,0);
	//    rope1=new Rope(bobObject6.body,roof.body,-70*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  //drawSprites();

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	// rope2.display();
	// rope3.display();
	// rope4.display();
	// rope5.display();
	// rope6.display();


 
}



