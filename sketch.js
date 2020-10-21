const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
var engine,ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;
  var ground_options = {

    isStatic : true
  }

   ground = Bodies.rectangle(200,380,400,20,ground_options);
   World.add(world, ground);
   console.log(ground);

   var ball_options = {
     restitution : 1.0
  }

  ball = Bodies.circle(200,110,20,ball_options);
   World.add(world, ball);
   console.log(ball);
   
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  rectMode(CENTER)
  //rect(200,200,50,50)
  fill("green") 
  rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 fill("red")
 ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}