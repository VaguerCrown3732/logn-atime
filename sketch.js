var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var orangeImg
var apple;
var leaf, orangeLeaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  orangeImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createLeaves() {
leaf = createSprite(random(50, 350),40, 10, 10);
leaf.scale = 0.09;
leaf.addImage(leafImg);
leaf.lifetime = 300;
leaf.velocityY = 1
}

function createOrangeLeaf() {
orangeLeaf = createSprite(random(50, 350),40, 10, 10);
orangeLeaf.scale = 0.09;
orangeLeaf.addImage(orangeImg);
orangeLeaf.lifetime = 300;
orangeLeaf.velocityY = 1
}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.scale = 0.09;
  apple.addImage(appleImg);
  apple.lifetime = 300;
  apple.velocityY = 4
}








function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();

  rabbit.x = World.mouseX;

  if(apple.isTouching(rabbit)){
    apple.visible = false
  }

  if(leaf.isTouching(rabbit)){
    leaf.visible = false
  }

  if(orangeLeaf.isTouching(rabbit)){
    orangeLeaf.visible = false
  }


  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      //call createApples function
      createApples()
    }
    else if(select_sprites == 2) {
      //call createLeaves function
      createLeaves()
    }
    else {
      createOrangeLeaf()
    }
  }


}