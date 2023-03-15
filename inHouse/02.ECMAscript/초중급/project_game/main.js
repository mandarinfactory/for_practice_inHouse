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

function handleFrame() {
  requestAnimationFrame(handleFrame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var cactus = new Cactus();
  cactus.draw();
  square.draw();
}
handleFrame();
