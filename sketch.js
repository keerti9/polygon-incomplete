const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var slingshot;
var ground;
var box;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

slingshot = new slingshot(this.polygon,{x:100,y:200});

 ground = new Ground(600,height,1200,20);




}

function draw() {
  background(255,255,255); 
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bpolygonbody, {x: mouseX , y: mouseY});
  }
}