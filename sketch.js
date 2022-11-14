var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,400);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("jakeRunning",boyImg);
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
