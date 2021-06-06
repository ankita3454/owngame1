const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var runner1,runner1_pic;
var ground;
var backgroundImage;
var angryppl,angryppl_image
var diamonds,diamonds_pic;
var fireball,fireball_pic;
var shuriken,shuriken_pic;
var snakes,snakes_pic;
var stones,stones_pic;
var diamonds,diamondsGroup;
var obstacles,obstaclesGroup;
var life,life_image;
var levels,levels_image
var score=0;
var lives = 3;

function preload()
{
  
   runner1_pic=loadImage("running boy.png");
   diamonds_pic=loadImage("diamonds.png");
   fireball_pic=loadImage("fireball.png");
   shuriken_pic=loadImage("shuriken.png");
   snakes_pic=loadImage("snakes.png");
   stones_pic=loadImage("stones.png");
   life_image=loadImage("life.png");
   
  
}

function setup()
{
   var canvas= createCanvas(1400,600);
  

   score=0;
   

   runner1= createSprite(70,450,20,40);
   runner1.addImage(runner1_pic)
   runner1.scale=0.4;

  life1=createSprite(1300,100,10,10)
   life1.addImage(life_image)
   life1.scale=0.1;
   
   life2=createSprite(1250,100,10,10)
   life2.addImage(life_image)
   life2.scale=0.1;

   life3=createSprite(1200,100,10,10)
   life3.addImage(life_image)
   life3.scale=0.1;
   
   

   
   ground=createSprite(700,600,1400,20)
   
  diamondsGroup = new Group();
  obstaclesGroup = new Group();
  
   
}

function draw()
{
 background(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
 
 runner1.collide(ground);
 
 if(gameState===PLAY)
 {
   fill("black")
   text("SCORE:"+score,100,100) 

   //if(bg.x<1300)
    {
       // bg.x=bg.width/2;
    }


    if(keyDown(UP_ARROW)&&(runner1.y>=500))
    {
       runner1.velocityY=-13;
    }
     
    runner1.velocityY= runner1.velocityY+0.8;

    Diamonds();
    flyingObstacles();
    groundObstacles();


    if(runner1.isTouching(diamondsGroup))
    {
       diamondsGroup.destroyEach();
       score+=1
    }

    if(runner1.isTouching(obstaclesGroup))
    {
       obstaclesGroup.destroyEach();
       score-=1    
    }
 }

 
   
 

 

 if(gameState===END)
 {
    obstaclesGroup.setVelocityX(0);
    diamondsGroup.setVelocityX(0);
    obstaclesGroup.setlifetimeEach(-1);
    diamondsGroup.setlifetimeEach(-1);
 }

    drawSprites();

}

function Diamonds()
{
   if(frameCount%200===0)
    {
      diamonds= createSprite(1400,random(470,560),30,30);
       diamonds.addImage(diamonds_pic);
       diamonds.scale=0.04;
       diamonds.velocityX=-8;
      diamonds.lifetime=200;

      diamondsGroup.add(diamonds)

      
    }    
}

function flyingObstacles()
{
 if(frameCount%120===0)
 {
    var f_obstacle= createSprite(1400,540,30,30);
    f_obstacle.velocityX=-13;
    f_obstacle.scale=0.05;
    f_obstacle.lifetime=300;
    var rand=Math.round(random(1,2));
    switch(rand)
    {
      case 1:f_obstacle.addImage(shuriken_pic)
      break;
      case 2:f_obstacle.addImage(fireball_pic)
      break;
      default:
      break;
}
obstaclesGroup.add(f_obstacle)

 }


 
}
function groundObstacles()
{
 if(frameCount%240===0)
 {
    var g_obstacle= createSprite(1400,570,30,30);
    g_obstacle.velocityX=-13;
    g_obstacle.scale=0.04;
    g_obstacle.lifetime=300;
    var rand=Math.round(random(1,2));
    switch(rand)
    {
      case 1:g_obstacle.addImage(stones_pic)
      break;
      case 2:g_obstacle.addImage(snakes_pic)
      break;
      default:
      break;
}
obstaclesGroup.add(g_obstacle)

 }

 
 
}
 