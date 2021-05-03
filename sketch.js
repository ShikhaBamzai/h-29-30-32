const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImage;
var score = 0;

function preload(){
    polygonImage = loadImage("polygon.png")
}

function setup(){

    
createCanvas(800,800);
engine = Engine.create();
    world = engine.world;
    ground = new Ground(590,600,200,20);
    box1 = new Box(620,575, 30,30);
    box2 = new Box(649, 575, 30,30);
    box3 = new Box(590,575,30,30);
    box4 = new Box(560,575,30,30);
    box5 = new Box(530,575,30,30);

    box6 = new Box(560,545,30,30);
    box7 = new Box(590,545,30,30);
    box8 = new Box(620,545,30,30);

    box9 = new Box(590,515,30,30)
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
   slingshot = new SlingShot(polygon,{x:200, y:500});
}

function draw(){
background("black")
Engine.update(engine);
noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-300, 50)

ground.display();
box1.display();
box1.score()
box2.display();
box2.score()
box3.display();
box3.score()
box4.display();
box4.score()
box5.display();
box5.score()
box6.display();
box6.score()
box7.display();
box7.score()
box8.display();
box8.score()
box9.display();
box9.score()
slingshot.display();
imageMode(CENTER)
image (polygonImage,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
       
    //}
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon);
       Matter.Body.setPosition(polygon, {x: 200 , y: 500});
       
    }
}
