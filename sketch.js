var fixedRect, movingRect;

var gameObj1, gameObj2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameObj1 = createSprite(200, 200, 50, 50);
  gameObj1.shapeColor = "green";
  gameObj1.debug = true;

  gameObj2 = createSprite(600, 200, 50, 50);
  gameObj2.shapeColor = "green";
  gameObj2.debug = true;

  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, gameObj1)){
    gameObj1.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }else {
    gameObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}

