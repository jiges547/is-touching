var rect1,rect2



function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(200,200,50,50);
}

function draw() {
  background(0); 
  rect2.x=mouseX 
  rect2.y=mouseY
  textSize(20)
  fill("yellow")
 text(rect1.x-rect2.x,100,100)
 text(rect1.width/2+rect2.width/2,100,200)
 if(rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
  rect2.y-rect1.y<rect1.height/2+rect2.height/2&&rect1.y-rect2.y<rect1.height/2+rect2.height/2){
   rect1.shapeColor="blue"
   rect2.shapeColor="green"
 }
 else
{
  rect1.shapeColor="yellow"
  rect2.shapeColor="red"
}
  drawSprites();
}