
var width = document.body.clientWidth;
var height = document.body.clientHeight;
var dpi = window.devicePixelRatio;
var particles = 100;
const canvas = document.querySelector('#mainCanvas')
const ctx = canvas.getContext('2d');
console.log(document.body.clientHeight, document.body.clientWidth)


function randRange(){
  const ex = [-1, 1]
  return ex[Math.round(Math.random())]
}

class Star {
  constructor(){
    this.xdir = 1;
    this.ydir = 1;
    this.el = randRange();
    this.rand = Math.random();
    this.x = width * Math.random();
    this.y = height * Math.random();
    this.radius = 10 * this.rand; 
    this.color  = `rgba(0, 0,0, ${this.rand})`;
     this.shadowBlur = 40 * Math.random();
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.shadowOffsetX = 0.0;
    ctx.shadowOffsetY = this.shadowBlur;
    ctx.shadowBlur = this.shadowBlur;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
    ctx.fill();
  }
  
  motion(){
    this.x += this.el * this.rand * 0.5 *this.xdir * (1/this.radius);
    this.y += this.el * this.rand * 1 * this.ydir * (1/this.radius)

    if (this.x < 0 || this.x > width){
      this.xdir *= -1;
    }
    if (this.y < 0 || this.y > height){
      this.ydir *= -1;
    }
    // this.radius += randRange() * 0.01;
  }
}


//fixing blurred canvas
function fix_dpi(){
  let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
  let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
  canvas.setAttribute('height', style_height * dpi);
  canvas.setAttribute('width', style_width * dpi)
}



function init(){
  starArray = [];
  for (var i = 0; i < particles; i ++){
    starArray[i] = new Star();
  }
  fix_dpi();
  window.requestAnimationFrame(draw);
}




function draw(){
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  ctx.clearRect(0, 0, width, height);
  starArray.forEach((el)=>{
    el.draw();
    el.motion();
  })

  window.requestAnimationFrame(draw)
}

init()