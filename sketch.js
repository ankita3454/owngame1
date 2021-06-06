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
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block_group;
var snake_pic, snake1, snake2,snake3;
var diamond1,diamond2,diamond3,diamond4,diamond5, diamonds_pic;
var flag, flag_pic;


function preload()
{
    runner1_pic=loadImage("running boy.png");
    diamonds_pic=loadImage("diamonds.png");
    fireball_pic=loadImage("fireball.png");
    shuriken_pic=loadImage("shuriken.png");
    snakes_pic=loadImage("snakes.png");
    stones_pic=loadImage("stones.png");
    life_image=loadImage("life.png"); 
    flag_pic=loadImage("flag.png");  
}

function setup()
{
    var canvas= createCanvas(1400,600);
  

    score=0;
    
 
    runner1= createSprite(70,450,20,40);
    runner1.addImage(runner1_pic)
    runner1.scale=0.4;
 
   life1=createSprite(1300,100,10,10);
    life1.addImage(life_image)
    life1.scale=0.1;
    
    life2=createSprite(1250,100,10,10);
    life2.addImage(life_image)
    life2.scale=0.1;
 
    life3=createSprite(1200,100,10,10);
    life3.addImage(life_image);
    life3.scale=0.1;
    
    
 
    
    ground=createSprite(700,600,1400,20);

    flag= createSprite(1300,365,10,10)
    flag.addImage(flag_pic)
    flag.scale=0.07;

    snake1 =createSprite(350,100,10,10);
    snake1.addImage(snake_pic);
    snake1.scale=0.05;
    snake1.velocityY=-4;

    snake2 =createSprite(550,150,10,10);
    snake2.addImage(snake_pic);
    snake2.scale=0.05;
    snake2.velocityX=-3;
    
   diamond1 =createSprite(140,550,10,10);
    diamond1.addImage(diamonds_pic);
    diamond1.scale=0.05;
  
    diamond2 =createSprite(620,480,10,10);
    diamond2.addImage(diamonds_pic);
    diamond2.scale=0.05;
    
    diamond3 =createSprite(1230,440,10,10);
    diamond3.addImage(diamonds_pic);
    diamond3.scale=0.05;
  
    diamond4 =createSprite(890,50,10,10);
    diamond4.addImage(diamonds_pic);
    diamond4.scale=0.05;
    
    diamond5 =createSprite(450,50,10,10);
    diamond5.addImage(diamonds_pic);
    diamond5.scale=0.05;
    
    snake3 =createSprite(1010,230,10,10);
    snake3.addImage(snake_pic);
    snake3.scale=0.05;
    snake3.velocityX=-4;

    block1= createSprite(5,200,10,600);
    block2= createSprite(485,100,10,300)
    block10 = createSprite(1300,410,200,10);
    block11 = createSprite(1200,455,10,100);
    block12 = createSprite(1150,500,100,10);
    block13 = createSprite(100,400,10,500);
    block14 = createSprite(200,250,200,10);
    block15 = createSprite(650,380,10,550);
    block16 = createSprite(650,300,200,10);
    block17 = createSprite(555,250,10,100);
    block18 = createSprite(1400,100,500,10);
    block19 = createSprite(1155,200,10,200);
    block20 = createSprite(1225,200,150,10);
    block21 = createSprite(745,250,10,100);
    block22 = createSprite(1100,200,100,10);
    block23 = createSprite(1050,230,10,130);
    block24 = createSprite(1000,170,100,10);
    block25 = createSprite(1000,290,100,10);
    block26 = createSprite(700,370,100,10);
    block27 = createSprite(50,5,900,10);
    block28 = createSprite(1400,10,1400,10);
    block29 = createSprite(790,495,10,80);
    block30 = createSprite(300,50,10,90);
    block31 = createSprite(850,50,10,80);
    block32 = createSprite(810,85,80,10);
    block33 = createSprite(890,85,80,10);
    block34 = createSprite(1100,590,700,10);
    block35 = createSprite(100,590,750,10);
    block36 = createSprite(1000,520,10,150);
    block37 = createSprite(755,450,500,10);
    block38 = createSprite(100,500,10,150);
    block39 = createSprite(200,450,200,10);
    block40 = createSprite(400,390,10,400);
    block41 = createSprite(300,350,200,10);
    block42 = createSprite(880,330,10,250);
    
    block_group=new Group();
    
      block_group.add(block1);
      block_group.add(block2);
      block_group.add(block10);
      block_group.add(block11);
      block_group.add(block12);
      block_group.add(block13);
      block_group.add(block14);
      block_group.add(block14);
      block_group.add(block15);
      block_group.add(block16);
      block_group.add(block17);
      block_group.add(block18);
      block_group.add(block19);
      block_group.add(block20);
      block_group.add(block21);
      block_group.add(block22);
      block_group.add(block23);
      block_group.add(block24);
      block_group.add(block25);
      block_group.add(block26);
      block_group.add(block27);
      block_group.add(block28);
      block_group.add(block29);
      block_group.add(block30);
      block_group.add(block31);
      block_group.add(block32);
      block_group.add(block33);
      block_group.add(block34);
      block_group.add(block35);
      block_group.add(block36);
      block_group.add(block37);
      block_group.add(block38);
      block_group.add(block39);
      block_group.add(block40);
      block_group.add(block41);
      block_group.add(block42);
    
   diamondsGroup = new Group();
   obstaclesGroup = new Group();
   
    
}

function draw()
{
    background(0);

    drawSprites();
}

