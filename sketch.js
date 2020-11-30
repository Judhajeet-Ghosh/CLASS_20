var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(200,100,50,100)

  fixedRect.shapeColor = "yellow"
 movingRect.shapeColor = "yellow"
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}
else{
  fixedRect.shapeColor = "yellow"
  movingRect.shapeColor = "yellow" 
}
  drawSprites();
}