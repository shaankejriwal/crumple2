const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground
var rect1;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world();

	var ball_options={
		restitution:0.5
	}

	rect1 = new Dustbin(750,600,10,10);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(100,650,20,ball_options);
	world.add(world,ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  moveForward();
  rect1.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();

}

function moveForward(){
	if(keyDown("UP_ARROW")){
		Body.setStatic(ball,false);
		Matter.Body.applyForce(ball.Body.x,ball.Body.y,position,{x:85,y:85})
	}
}


