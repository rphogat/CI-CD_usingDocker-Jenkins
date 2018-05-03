var canvas;
var ctx;

var head;
var apple;
var ball;

var dots;
var apple_x;
var apple_y;

var apple_x1;
var apple_y1;

var apple_x2;
var apple_y2;
var n1 = 1;
var n2 = 8;
var n3 = 9;
var flag = false;

var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;    

const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 50;
const DELAY = 140;
const C_HEIGHT = 600;
const C_WIDTH = 600;    

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

var x = new Array(ALL_DOTS);
var y = new Array(ALL_DOTS);   
var img = new Image();
img.src='https://fontmeme.com/permalink/180409/6d68ba92d81d523cc9b38fe54b4cd8e1.png';

function init() {
    
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    loadImages();
    createSnake();
    locateApple();
    setTimeout("gameCycle()", DELAY);
}    
function drawEgg(apple_x,apple_y,n){
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var context1 = canvas.getContext('2d');
      var centerX = 0;
      var centerY = 0;
      var radius = 10;

      // save state
      context.save();

      // translate context
      context.translate(apple_x, apple_y);

      // scale context horizontally
      context.scale(2 , 3);

      // draw circle which will be stretched into an oval
      context.beginPath();
      context.arc(centerX,centerY, radius, 0, 3 * Math.PI, false);

      // restore to original state
      context.restore();
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 1;
      context.font = "20px Roman";
      context.strokeStyle = 'black';
      context.strokeText(n,apple_x,apple_y)
      context.stroke(); 
    
    
}
function loadImages() {
    head = new Image();
    head.src = 'https://lh3.googleusercontent.com/MB7MBAjI-0xjtBz3cdNs_6E9ogWrB_0sjhAlieV6WKgccGRukWpeNo8TOOehn9Vgx4fOG6r_kIRehzJnPRQRMsOO02Tte_3_BcY8_3X3UcZRaDTv6BfrTdC3Z9LqqRqlWMXjKGgbqw=s13-p-k';
    
    ball = new Image();
    ball.src = 'https://lh3.googleusercontent.com/MB7MBAjI-0xjtBz3cdNs_6E9ogWrB_0sjhAlieV6WKgccGRukWpeNo8TOOehn9Vgx4fOG6r_kIRehzJnPRQRMsOO02Tte_3_BcY8_3X3UcZRaDTv6BfrTdC3Z9LqqRqlWMXjKGgbqw=s13-p-k';
    
}

function createSnake() {

    dots = 4;
    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
}

/*
function checkApple() {

    if ((x[0] == apple_x) && (y[0] == apple_y)) {

        //dots++;
        locateApple();
        
    }
}  */  

function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {

        //ctx.drawImage(apple, apple_x, apple_y);
        //ctx.drawImage(apple, apple_x1, apple_y1);
        //ctx.drawImage(apple, apple_x2, apple_y2);
        drawEgg(apple_x,apple_y,n1);
        drawEgg(apple_x1,apple_y1,n2);
        drawEgg(apple_x2,apple_y2,n3);

        for (var z = 0; z < dots; z++) {
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }    
    } else {
          gameOver();
    }        
}

function gameOver() {
   
    // ctx.fillStyle = 'black';
    // ctx.textBaseline = 'middle'; 
    // ctx.textAlign = 'center'; 
    // ctx.font = 'normal bold 28px verdana';
    // ctx.fillText('Game over', C_WIDTH/2, C_HEIGHT/2);
    ctx.drawImage(img, 180, 250);
}

function checkApple() {
    //window.alert("check apple");
    if ((x[0] == apple_x2) && (y[0] == apple_y2)) {
        //dots++;
        locateApple();
    }
   /* else if ((x[0] == apple_x1) && (y[0] == apple_y1)) {
        
        //dots++;
        gameOver();
    }
    else if ((x[0] == apple_x) && (y[0] == apple_y)) {
        
        //dots++;
        gameOver();
    }*/

}

function move() {

    for (var z = dots; z > 0; z--) {
    
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }

    if (leftDirection) {
    
        x[0] -= DOT_SIZE;
    }

    if (rightDirection) {
    
        x[0] += DOT_SIZE;
    }

    if (upDirection) {
    
        y[0] -= DOT_SIZE;
    }

    if (downDirection) {
    
        y[0] += DOT_SIZE;
    }
}    

function checkCollision() {

    for (var z = dots; z > 0; z--) {

        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }
    }

    if (y[0] >= C_HEIGHT) {
    
        inGame = false;
    }

    if (y[0] < 0) {
    
       inGame = false;
    }

    if (x[0] >= C_WIDTH) {
    
      inGame = false;
    }

    if (x[0] < 0) {
    
      inGame = false;
    }
 
    if (((x[0] >= apple_x - 20) && (x[0] <= apple_x + 10)) &&
           ((y[0] >= apple_y - 30) && (y[0] <= apple_y + 20))){
      resetOriginalPosition();
    }

    if (((x[0] >= apple_x1 - 20) && (x[0] <= apple_x1 + 10)) &&
           ((y[0] >= apple_y1 - 30) && (y[0] <= apple_y1 + 20))){
       alert("YOU WON!");
       init();
    }

    if (((x[0] >= apple_x2 - 20) && (x[0] <= apple_x2 + 10)) &&
           ((y[0] >= apple_y2 - 30) && (y[0] <= apple_y2 + 20))){
       resetOriginalPosition();
    }
}

function resetOriginalPosition(){
        createSnake();
        updateLives();
}

function updateLives(){
  var spanLives = document.getElementById('lblLives');
  spanLives.innerHTML = spanLives.innerText - 1;
  
  if(spanLives.innerText == 0){
    inGame = false;
  }
}

/*
function locateApple() {

    var r = Math.floor(Math.random() * MAX_RAND);
    apple_x = r * DOT_SIZE;
     apple_x1 = r/2 * DOT_SIZE;
      apple_x2 = r/4 * DOT_SIZE;
      
     r = Math.floor(Math.random() * MAX_RAND);
    apple_y = r * DOT_SIZE;
    apple_y1 = 2/5*r * DOT_SIZE;
    apple_y2 = r/6 * DOT_SIZE;
    
      if((apple_x > 310 || apple_y > 310) || ( apple_x1 > 310 || apple_y1 > 310) || (apple_x2 > 310 || apple_y2 > 310)){
          
           locateApple();
      }

    
}    */

function locateApple() {

    var r = Math.floor(Math.random() * MAX_RAND);
    apple_x2 = 200;
     apple_x1 = r * DOT_SIZE;
      apple_x = 60;
      
     r = Math.floor(Math.random() * MAX_RAND);
    apple_y2 = 200;
    apple_y1 = r * DOT_SIZE;
    apple_y = 250;
    /*
      if((apple_x > 310 || apple_y > 310) || ( apple_x1 > 310 || apple_y1 > 310) || (apple_x2 > 310 || apple_y2 > 310)){
          
           locateApple();
      }*/

    
}    


function gameCycle() {
    
    if (inGame) {

        checkApple();
        checkCollision();
        move();
        doDrawing();
        setTimeout("gameCycle()", DELAY);
    }
}

onkeydown = function(e) {
    
    var key = e.keyCode;
    e.preventDefault();
    
    if ((key == LEFT_KEY) && (!rightDirection)) {
        
        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {
        
        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {
        
        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {
        
        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }        
};    