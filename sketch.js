var fixedRect;
var movingRect;
var go1,go2,go3,go4;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect=createSprite(400,200,50,50);
  movingRect=createSprite(200,200,60,50);
  fixedRect.shapeColor="green";
movingRect.shapeColor="green";
go1=createSprite(100,100,50,50);
go1.shapeColor="green";
go2=createSprite(200,100,50,50);
go2.shapeColor="green";
go3=createSprite(300,100,50,50);
go3.shapeColor="green";
go4=createSprite(400,100,50,50);
go4.shapeColor="green";
go4.velocityX=2;
go4.velocityY=-2;
}

function draw() {
  background(0); 

movingRect.x=mouseX;
movingRect.y=mouseY;
 if (isTouching(movingRect,go1)){
  go1.shapeColor="blue";
  movingRect.shapeColor="blue";
 }
  else{
    go1.shapeColor="green";
    movingRect.shapeColor="green";
  
 }
 bounceoff(movingRect,go4);
  drawSprites();
}
