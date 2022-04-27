var piso, suelo;
var rex;
var reximg; 
var camino,desierto;
function preload() { 
  reximg=loadAnimation("EL corredor 10.png","Piza.png","YAKIMESHI.png");
 camino=loadImage("ground2.png");
  
  
} 

function setup() {
  createCanvas(700, 300);
  rex=createSprite(250,200); 
  rex.addAnimation("rexcorriendo",reximg);
  
  desierto=createSprite(231,250)
  desierto.addImage("larry",camino);
  desierto.velocityX=-4
  desierto.scale=2;
  bordes = createEdgeSprites();
  //rex.velocityX=+4
}
 
function draw() {
  background(175, 44, 44);
 text(mouseX+"-"+mouseY,10,30)
  drawSprites()
 if(desierto.x<0){                                        
 desierto.x=200
 
 }
}
