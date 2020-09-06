var bullet, wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,10,50);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  bullet.shapeColor=("white");
  wall.shapeColor=(80,80,80);

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damge=0.5*weight*speed*speed/(thickness*thickness*thickness);
    |
    if (damage>10)
    {
      wall.shapeColor=(255,0,0);
    }
    
    if (damge<10)
    {
      wall.shapeColor=(0,255,0);
    }
  }
  drawSprites(); 
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}