var background1 , background1Img;
var bird , birdImg;
var ground,groundImg;
var obstacle1 , obstacle2 , obstacle1Img , obstacle2Img , obstacle1Group,obstacle2Group;
var gameover , gameoverImg , restart , restartImg , invisground ; 
var score;

function preload (){
birdImg = loadImage("flappy bird.png");
background1Img = loadImage("background.png");
groundImg = loadImage("ground.png");
restartImg = loadImage("restart.png");
obstacle1Img = loadImage("ob1.png");
obstacle2Img = loadImage("ob2.png");
gameoverImg = loadImage("game over.png")

}

function setup(){
createCanvas(1800,900);

background1 = createSprite(760,300,10,10);
background1.addImage(background1Img);
background1.scale = 1.6;

gameover = createSprite(900,450);
gameover.addImage(gameoverImg);
gameover.visible= false;

bird = createSprite(260,400,10,10) 
bird.addImage(birdImg);



obstacle1Group = new Group();
obstacle2Group = new Group();
score = 0 ;

}

function draw(){
  
console.log(frameCount);
if(keyDown("space")){
 bird.velocityY = -15;
}
else {
bird.velocityY = 5 ; 
}

if(obstacle1Group.isTouching(bird)){
  bird.visible=false;
  gameover.visible=true;
  obstacle2Group.destroyEach();
  obstacle1Group.destroyEach();
  score = 0; 
}
if(obstacle2Group.isTouching(bird)){
  bird.visible=false;
  gameover.visible=true;
  obstacle2Group.destroyEach();
  obstacle1Group.destroyEach();
  score = 0; 
}
if(gameover.visible === true){
  obstacle2Group.destroyEach();
  obstacle1Group.destroyEach();
 score = 0; 
}
if(frameCount%60 ===0){
  score = score+5;
}
spawnObstacles();


drawSprites();

textSize(20);
fill("red");
text("score:"+score,1400,250);
}

function spawnObstacles(){
  if(frameCount%60 === 0 ){
    score = score+5;
    obstacle1 = createSprite(900,1,20,20);
    obstacle1.addImage(obstacle1Img);
    obstacle1.y = random(0,320);
    obstacle1.velocityX = -2;
    obstacle1.lifetime = 400;
    obstacle1Group.add(obstacle1);
  }
  if(frameCount%80 === 0 ){
    score = score+5;
    obstacle2 = createSprite(900,650,20,20);
    obstacle2.addImage(obstacle2Img);
    obstacle2.y = random(680,820);
    obstacle2.velocityX = -2;
    obstacle2.lifetime = 400;
    obstacle2Group.add(obstacle2);
  }
}