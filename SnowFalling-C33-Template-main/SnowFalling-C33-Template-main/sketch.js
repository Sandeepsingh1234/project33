var bg,snow,snowimage
  

function preload(){
  bg= loadImage("snow2.jpg")
 snowimage=loadImage("snow4.webp")
}



function setup() {
  createCanvas(1000,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addImage(snowimage);
  snow.scale=0.2
  snow1=createSprite(100, 100, 50, 50);
  snow1.addImage(snowimage);
  snow1.scale=0.2
  snow2=createSprite(200, 400, 50, 50);
  snow2.addImage(snowimage);
  snow2.scale=0.2
  snow3=createSprite(500, 420, 50, 50);
  snow3.addImage(snowimage);
  snow3.scale=0.2
  snow4=createSprite(250, 300, 50, 50);
  snow4.addImage(snowimage);
  snow4.scale=0.2
  snow5=createSprite(450, 250, 50, 50);
  snow5.addImage(snowimage);
  snow5.scale=0.2
}

function draw() {
  background(bg);  
  drawSprites();
}