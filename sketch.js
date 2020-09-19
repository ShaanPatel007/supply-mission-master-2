var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    side1 = createSprite(365,635,10,70);
	side2 = createSprite(width/2,655,70,10);
	side3 = createSprite(435,635,10,70);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false;
   


	helicopterSprite=createSprite(20, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	packageBody.visible=false;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	sideBody1 = Bodies.rectangle(365,635,10,70,{restitution:0.01 });
    World.add(world, sideBody1);
    sideBody2 = Bodies.rectangle(width/2,645,70,10,{restitution:0.01 });
    World.add(world, sideBody2);
    sideBody3 = Bodies.rectangle(435,635,10,70,{restitution:0.01 });
    World.add(world, sideBody3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  if (helicopterSprite.x < 400)
  {
	  helicopterSprite.velocityX=5;
	  packageBody.velocityX=5;
  }

  else if (helicopterSprite.x >= 400)
  {
	  if (keyCode === DOWN_ARROW)
	  {
		  helicopterSprite.velocityX=5;
		  packageBody.velocityX=0;
	  }

	  else if (keyCode != DOWN_ARROW )
	  {
		  helicopterSprite.velocityX=0;
		  packageBody.velocityX=0;
	  }

  }
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 packageSprite.visible=true;
	 packageBody.visible=true;
    Matter.Body.setStatic(packageBody,false);
    helicopterSprite.velocityX=5;
  }
}



