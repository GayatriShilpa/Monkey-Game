var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivaltime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(900, 500);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.lifetime = 900 / -12;

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  if (frameCount % 80 === 0) {
    banana = createSprite(450, 100, 20, 2);
    banana.addImage("banana", bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 900 / -3;
    FoodGroup.add(banana);
  }

  if (frameCount % 300 === 0) {
    obstacle = createSprite(600, 325, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.x = Math.round(random(100, 450));
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 900 / -3;
    //obstacle.collide(ground);
    obstacleGroup.add(obstacle);

  }

  monkey.collide(ground);


  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivaltime, 100, 20);

  drawSprites();
}