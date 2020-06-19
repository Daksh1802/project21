var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(977,200,50,10);
  wall=createSprite(1300,200,thickness,200);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
   background(0,0,0);

bullet.velocityX=0;
if(collide(bullet,wall)){


var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
bullet.shapeColor="red";
}
if(damage<10){
bullet.shapeColor="green";
}
//if(deformation<100){
//bullet.shapeColor="green";

//}
console.log(weight);

}
//if(car.x===1250){
//car.velocityX=0;


//}
  drawSprites();
}
function collide(lbullet,lwall){
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    return true
  }
else{
  return false
}

}