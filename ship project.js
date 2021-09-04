var ship,shipImg1,edges;
var seaImg;
var sea;

function preload(){
  shipImg1 = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg = loadImage("sea.png")
}  

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20)
  sea.addImage(seaImg)
  sea.velocityX=-2;
  sea.x=sea.width/2;

  ship = createSprite(50,160,20,50);
  ship.addImage(shipImg1);
  ship.scale = 0.25;
  
  edges = createEdgeSprites
 
}

function draw() {
  background("blue");



  if(sea.x < 0){
    sea.x=sea.width/2;
  }
  
  
  drawSprites();
}