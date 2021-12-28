var bg, canvas;

function preload() {
  backImage = loadImage("download.png");
}

function setup() {
  var canvas = createCanvas(1200, 600);
  backgr = createSprite(0, 0, 800, 400);
  backgr.addImage(backImage);
  backgr.scale = 1.5;
}
function draw() {
  // background(blue);
  drawSprites();
}
