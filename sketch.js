var alien, ranger, laserBeam, gun;
var alienImg, laserImg, rangerImg, bgImg, gunImg;
var counter = 10;
var button;
var score = 0;
var timer = 10;
var gameState = 0;

function preload(){
alienImg = loadImage("images/alien.png");
laserImg = loadImage("images/laser.png");
rangerImg = loadImage("images/spaceranger.png");
bgImg = loadImage("images/spacebackground.jpg");
gunImg = loadImage("images/ionblaster.png");

}

function setup(){
createCanvas(600,600);
ranger = createSprite(60,300,20,20);
ranger.addImage(rangerImg);
ranger.scale = 0.9;

gun = createSprite(ranger.x + 30,310,20,20);
gun.addImage(gunImg);
gun.scale = 0.3;

button = createButton("RELOAD");
button.position(800,100);
button.mousePressed(reload);

laserG = new Group();
alienG = new Group();

}

function draw(){
background(bgImg);
if(gameState == 0){
ranger.y = mouseY;
gun.y = mouseY + 10;  

if(frameCount %80 == 0){
  alien = createSprite(random(180,500),-10,20,20);
  alien.addImage(alienImg);
  alien.scale = 0.23;
  alien.velocityY = 5;
  alienG.add(alien);
}
if(frameCount %30 == 0){
  timer--;
}
if(keyWentDown("space") && counter > 0){
 laserBeam = createSprite(gun.x, gun.y - 5,30,3);
 laserBeam.addImage(laserImg);
 laserBeam.scale = 0.15;
 laserBeam.velocityX = 5;
 laserG.add(laserBeam);
 counter--;
}
 if(alienG.isTouching(laserG)){
  alienG.destroyEach();
  score++;
 }

 if(timer <= 0){
gameState = 1;
 }

textSize(17);
fill("white");
text("Bullets left: " + counter, 380,40);
text("Score: " + score, 280,40);
text("Time Left: " + timer, 140,40);
}

if(gameState == 1){
  alienG.destroyEach();
  button.hide();
  laserBeam.destroy();
  ranger.y = 300;
  gun.y = 310;
  if(score >= 2){
    textSize(20);
    fill("yellow");
    textStyle(BOLD);
    text("You have scored " + score, 210,300);
    text("Well Done", 210,330);
    
  } else{
    textSize(20);
    fill("yellow");
    textStyle(BOLD);
    text("You have scored " + score,210,300);
    text("Better Luck Next Time",210,330);
  }
}

drawSprites();
}
function reload(){
  counter = 10;
}
function spawnEnemy(){

}

function spawnBullet(){
  

 
   
}