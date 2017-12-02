const ctx = document.getElementById('canvas').getContext('2d');

const rect1 = {
  x: 9,
  y: 188,
  width: 20,
  height: 127,
  deltaY:10,
  wins: 0,
};
const rect2 = {

  x: 770,
  y: 188,
   width: 20,
  height: 127,
  deltaY:10,
  wins: 0
};
const ball = {
  size: 15,
  x: canvas.width/2,
  y: canvas.height/2,
  deltaX: 4,
  deltaY: 5

};
const drawCircle = function() {
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
ctx.fill();
};


const draw = function() {
ctx.fillStyle ='green';  
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRect(rect1.x, rect1.y, 20, 127);
ctx.fillRect(rect2.x, rect2.y, 20, 127);

};

const updateCircle = function () {
  ball.x += ball.deltaX;
  ball.y -= ball.deltaY;
  if(ball.y - ball.size < 0 || ball.y +ball.size > canvas.height) ball.deltaY = -ball.deltaY;
  if(ball.x - ball.size < rect1.x + rect1.width &&
     ball.x + ball.size > rect1.x &&
     ball.y - ball.size < rect1.y + rect1.height &&
     ball.y + ball.size > rect1.y) {
    ball.deltaX = - ball.deltaX;
    ball.deltaY *= 1.00001;
     }
     if(ball.x - ball.size < rect2.x + rect2.width &&
        ball.x + ball.size > rect2.x &&
        ball.y - ball.size < rect2.y + rect2.height &&
        ball.y + ball.size > rect2.y) {
      ball.deltaX = -ball.deltaX;
      ball.deltaY *= 1.00001;
     }
    if(ball.x -ball.size < 0) {
      rect2.wins += 1;
      ball.x = canvas.width/2; ball.y = canvas.height/2;
    }
    if(ball.x + ball.size> canvas.width){
      rect1.wins+= 1;
      ball.x = canvas.width/2; ball.y = canvas.height/2;
    }
    if(ball.deltaY >= 16) ball.deltaY = 5;
}
const drawResults = function() {
  ctx.font="48px Times New Roman";
  const res1 = rect1.wins + " ";
  const res2 = rect2.wins + " ";
  const res = res1 + ": " +  res2;
  ctx.fillText(res,canvas.width/2- 60,50);
  
}
const loop = function() {
  draw();
  drawCircle();
  updateCircle();
  drawResults();
 
  requestAnimationFrame(loop);
};
loop();

const sKey = 83;
const wKey = 87;
const upKey = 38;
const downKey = 40;
let upVal = false;
let downVal = false;
let wVal = false;
let sVal = false;

document.addEventListener('keydown', function(event) {
if(event.keyCode === upKey) {
    upVal = true;
  }
    
if(event.keyCode === downKey) {
    downVal = true;
  }
if(event.keyCode === wKey) {
    wVal = true;
  }
if(event.keyCode === sKey) {
    sVal = true;
  }
if(sVal === true) {
 rect1.y += rect1.deltaY;
 if(rect1.y + 127 > canvas.height) rect1.y  = canvas.height - 127;
  
}
if(wVal === true){
  rect1.y -= rect1.deltaY;
  if(rect1.y < 0) rect1.y = 0;
 
}
if(upVal === true){
 rect2.y -= rect2.deltaY;
 if(rect2.y < 0) rect2.y = 0; 

}
if(downVal === true){
  rect2.y += rect2.deltaY;
  if(rect2.y + 127> canvas.height) rect2.y = canvas.height - 127;
}
}, false);

document.addEventListener('keyup', function(event) {
  if(event.keyCode === upKey) {
     upVal = false;
    }
    
  if(event.keyCode === downKey) {
    downVal = false;
  }
  if(event.keyCode === wKey) {
      wVal = false;
    }
  if(event.keyCode === sKey) {
     sVal = false;
  }
}, false);
