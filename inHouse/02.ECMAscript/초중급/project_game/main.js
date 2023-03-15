var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var square = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "firebrick";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
square.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
var cactuses = [];
var jumpTime = 0;

function handleFrame() {
  requestAnimationFrame(handleFrame);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 60 === 0) {
    var cactus = new Cactus();
    cactuses.push(cactus);
  }
  cactuses.forEach((a, i, o) => {
    //x좌표가 0미만이면 제거!
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
    a.draw();
  });
  if (jump == true) {
    square.y-= 2 ;
    jumpTime++;
  }
  if (jump == false) {
    if (square.y < 200) {
      square.y++;
    }
  }
  if (jumpTime > 100) {
    jump = false;
  }
  square.draw();
}
handleFrame();

var jump = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump = true;
  }
});
