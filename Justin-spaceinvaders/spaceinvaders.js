// function setup(){
//     createCanvas(700,700);
//     background('black');
// };
// var x = 350;
// var enemyX = 0;
// var xSpeed = 5;
// function draw(){
//     background('black');
//     fill("red");
//     //rect(x,610,15,20);
//     rect(x,625,50,60);
//     if (keyIsDown(LEFT_ARROW)){
//         x-=5;
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         x+=5;
//     }
//    fill("blue");
//    enemyX += xSpeed;
//    if(x >= 675 || x <= 25){
//     xSpeed += -1;
// }
//    function enemies (enemy1, enemy2, enemy3, enemy4, enemy5){
//         var enemy1 = ellipse(enemyX,46,55,55);
//         var enemy2 = ellipse(enemyX,116,55,55);
//         var enemy3 = ellipse(enemyX,46,55,55);
//         var enemy4 = ellipse(enemyX,116,55,55);
//         var enemy5 = ellipse(enemyX,46,55,55);
//    }
//    enemies();
 
    

// };

//S function setup(){
//    createCanvas(700,700);
//    background('black');
// }
// var x = 350;

// function draw(){
//    background('black');
//    fill("red");
//    //rect(x,600,15,20);
//    rect(x,625,50,60);
//    if (keyIsDown(LEFT_ARROW)){
//        x-=5;
//    }
//    if(keyIsDown(RIGHT_ARROW)){
//        x+=5;
//    }
// fill("blue");
// enermyX =+ xSpeed
// if(x >= 475 || x< = 25){
//     xSpeed = -1;

// function enemies(enemy1,enemy2,enemy3,enemy4,enemy5){
//     var enemy1 = ellipse(76,46,55,55);
//     var enemy2 = ellipse(210,116,55,55);
//     var enemy3 = ellipse(340,46,55,55);
//     var enemy4 = ellipse(500,116,55,55);
//     var enemy5 = ellipse(624,46,55,55);
// }
function setup(){
  createCanvas(700,700);
  background('black');
};
var f = 350;
var y = 700;

var xPos = 11; // Bounce code
var x = 2;


function draw(){
  background('black');
   if(xPos<0 || xPos>600) x= -x;
   xPos -= x;
 
   fill("blue");
   ellipse(xPos,50,(40),(40));
   ellipse(xPos,100,(40,40));
   ellipse(xPos,150,(40,40));


   //rect(60, 590, 100, 100); // --> "200 = x-coord. "10= y-coord. "50 and 50= weidth and height
   //fill(random(0,100),random(0,255),random(0,255));
   
  fill("red");
  //rect(x,600,15,20);
  rect(f,625,50,60);
  if (keyIsDown(LEFT_ARROW)){
      f-=5;
  }
  if(keyIsDown(RIGHT_ARROW)){
      f+=5;
  }
//   fill("blue");
//   ellipse(76,46,35,35);
//   ellipse(210,116,35,35);
//   ellipse(340,46,35,35);
//   ellipse(500,116,35,35);
//   ellipse(624,46,35,35);
}