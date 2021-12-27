var bg,canvas;

function preload(){
    bg=loadImage("download.png")
 
}

function setup(){
    var canvas=createCanvas(1200,600);
}
function draw(){
    background(bg);
    drawSprites();
}