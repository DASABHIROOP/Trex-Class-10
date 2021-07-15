var trex,trex_running,groundImage,ground;
function preload()
{
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png");
}

function setup() 
{
  createCanvas(600,200);
  trex = createSprite(50,180,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(300,190,600,10);
  ground.addImage ("ground",groundImage);
}

function draw() 
{
background("grey");

trex.collide(ground);
if (keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+0.8;

ground.velocityX = -5;

if (ground.x<0){
ground.x = ground.width/2;
}
drawSprites();
}



