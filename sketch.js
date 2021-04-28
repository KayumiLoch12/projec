var gamestate = "start"
var forestBackground;
var you ;
var susElf;
var muggy;
var monster;
var visibility = 255; 
var gamebutton1, gamebutton2;
var gameImage,gameImage2;
var muggyWalking, muggystanding, elfIsHere;
var tempFloor;
//scam quest images
var BgScamQuest
var Bgscam
var susObject, susObjectImage;
var  floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9;
var edge1, edge2,edge3,edge4;
function preload(){

  gameImage = loadImage("gameCover.png");
  gameImage2 = loadImage("gameCover2.png");
   
  muggystanding = loadAnimation("png/Idle1.png","png/Idle2.png","png/Idle3.png","png/Idle4.png","png/Idle5.png","png/Idle6.png","png/Idle7.png","png/Idle8.png","png/Idle9.png","png/Idle10.png","png/Idle11.png","png/Idle12.png","png/Idle13.png","png/Idle14.png","png/Idle15.png","png/Idle16.png",)
  muggyWalking = loadAnimation("png/Walk1.png","png/Walk2.png","png/Walk3.png","png/Walk4.png","png/Walk5.png","png/Walk6.png","png/Walk7.png","png/Walk8.png","png/Walk9.png","png/Walk10.png","png/Walk11.png","png/Walk12.png","png/Walk13.png","png/Walk14.png","png/Walk15.png","png/Walk16.png","png/Walk17.png","png/Walk18.png","png/Walk19.png","png/Walk20.png");
  elfIsHere = loadAnimation("susElf.png","SusElf2.png");

  BgScamQuest = loadImage("ScamBg.jpeg")

  susObjectImage = loadImage("dasSUS.png");

}

function setup() {
  createCanvas(1000,500);

  

  forestBackground = createSprite(400,250, 1,1);
  //tempFloor = createSprite(900,450, 100000,10)
  //tempFloor.visible = false
  //gamebuttons uwu
  gamebutton1 = createSprite(500,250,40,40) 
  gamebutton1.addImage(gameImage);
  gamebutton1.scale = 0.5
  gamebutton1.visible = false;

    gamebutton2 = createSprite(550,255,40,40)
    gamebutton2.addImage(gameImage2);
    gamebutton2.scale = 0.5
    gamebutton2.visible = false;

    

     //game people = scam quest
 Bgscam = createSprite(500,250)
    Bgscam.visible = false;
    Bgscam.addImage(BgScamQuest)

     muggy = createSprite(500,250,10,10);
     muggy.addAnimation("muggy",muggystanding);
     muggy.addAnimation("walking",muggyWalking);
     muggy.scale = 0.2
     muggy.visible = false;

     susElf = createSprite(150,400,10,10);
     susElf.addAnimation("susElf",elfIsHere);
     susElf.scale = 0.2;
     susElf.visible = false;

     gamebutton1.debug = true;
     gamebutton2.debug = true;
    

    gamebutton1.setCollider("rectangle", -498,0,490,1000)
    gamebutton2.setCollider("rectangle", 498,0,490,1000)

   floor1 = createSprite(595,310,252,5);
   floor1.visible = false;
   floor1.debug = true;
   floor2 = createSprite(235,270,202,5);
   floor2.visible = false;
   floor2.debug = true;
   floor3 = createSprite(445,140,122,5);
   floor3.visible = false;
   floor3.debug = true;
   floor4 = createSprite(620,55,122,5);
   floor4.visible = false;
   floor4.debug = true;
   floor5 = createSprite(910,30,212,5);
   floor5.visible = false;
   floor5.debug = true;
   floor6 = createSprite(110,30,255,5);
   floor6.visible = false;
   floor6.debug = true;
   floor7 = createSprite(560,450,352,5);
   floor7.visible = false;
   floor7.debug = true;
   floor8 = createSprite(110,500,305,5);
   floor8.visible = false;
   floor8.debug = true;
   floor9 = createSprite(830,500,130,5);
   floor9.visible = false;
   floor9.debug = true;
   //floor9.debug = true;

   //edges
   edge1 = createSprite(1,250,5,1000);
   edge1.debug = true;
   edge1.visible = false;
   edge2 = createSprite(250,-130,2000,5);
   edge2.debug = true;
   edge2.visible = false;
   //edge3 = createSprite(250,-130,2000,5);
   //edge3.debug = true;
   //edge3.visible = false;

  susObject = createSprite(890,50, 20,20)
  susObject.addImage(susObjectImage);
  susObject.scale = 0.1
  //susObject.debug = true;
  susObject.setCollider("circle",0,-200,200)
}

function draw() {
 background(255,255,255);
//background("pink")

  if (gamestate === "start"){
    if(keyDown("space")){
      gamestate = "lv."
    

    }
      
  //start screen text
  fill("lightblue");
  textSize(15)
  text("press space to go to lv. screen >:3",380,300);
  fill(162,225,221);
  textSize(50);
  text("REVIVAL OF PIXEL GAMES", 120, 230);
  }
  if (gamestate === "lv."){
    gamebutton1.visible = true;
    gamebutton2.visible = true;
    
    if (mousePressedOver(gamebutton2)){
      gamestate = "ScamQuest"
    }
    if (mousePressedOver(gamebutton1)){
      gamestate = "escape"
    }
   
  }
  if (gamestate === "ScamQuest"){
    //background(BgScamQuest);
    Bgscam.visible = true

    gamebutton1.visible = false;
    gamebutton2.visible  =  false;

    muggy.visible = true;
    muggy.velocityY = muggy.velocityY +0.8;
    susElf.visible = true;
    //edge1.visible = true;
    muggy.bounceOff(edge1);
    //edge2.visible = true;
    muggy.bounceOff(edge2);


   // tempFloor.visible = true;
    //muggy.collide(tempFloor);

    //floor1.visible = true;
    muggy.collide(floor1);

    //floor2.visible = true;
    muggy.collide(floor2);

    //floor3.visible = true;
    muggy.collide(floor3);

    //floor4.visible = true;
    muggy.collide(floor4);

     //floor5.visible = true;
    muggy.collide(floor5);

    //floor6.visible = true;
    muggy.collide(floor6);

    //floor7.visible = true;
    muggy.collide(floor7);

    //floor8.visible = true;
    muggy.collide(floor8);

    //floor9.visible = true;
    muggy.collide(floor9);

    if(muggy.isTouching(susObject)){
      susObject.collide(muggy);
      susObject.x = muggy.x
      susObject.y = muggy.y
      }

    
    //follow muggy
    camera.position.x = muggy.x
    camera.position.y = muggy.y

    
    //moving keys 
    if(keyDown("right")){
      muggy.x = muggy.x +6;
    }
    if(keyDown("left")){
      muggy.x = muggy.x -6;
      muggy.changeAnimation("walking",muggyWalking)
    }
    if(keyDown("space")){
      muggy.velocityY = -10;
    }
    //if(keyWentUp("left")){
      //muggy.changeAnimation("muggy",muggystanding) }
    
  }
  if (gamestate === "escape"){
    gamebutton1.visible = false;
    gamebutton2.visible = false;
  }
  drawSprites();
  if (gamestate === "ScamQuest" && muggy.isTouching(susObject)){

    text("Good Job!!! you must now bring the very sis object to the very sus elf for a reward",550, -70)
  
  }
}