function setup(){
    createCanvas(500, 500);
    background(150);
    
}

var x = 50;
var y = 179;
var xSpeed = 80;
var ySpeed = 80;

function draw(){
    background(150);
    ellipse(x, y, 50);
    fill(random(0,255),random(0,255), random(0,255));
    x += xSpeed; 
if(x >= 475 || x <= 25){
    xSpeed *= -1;
}
    y+=ySpeed;
if(y >= 475 || y <= 25){
    ySpeed *= -1;
}
}


//
// function draw(){
//     background(150);
//     ellipse(200, y, 100);
//     rectMode(CENTER);
//     y+= 1;
// }