let R;
let r;
let step = 1;
let t;
let p;
let x;
let y;
let prevX, prevY;
let l, k, ang;

function setup() { 
  createCanvas(800, 600);
  background(220);
  noFill();
  R = Math.floor(random(100, 300));
  r = Math.floor(random(30, R - 50));
  p = Math.floor(random(10, r - 10));
  k = r / R;
  l = p / r;
  console.log('p: ', p);
  console.log('R: ', R);
  console.log('r: ', r);
} 

function draw() {
  // ellipse(width / 2, height / 2, R * 2, R * 2);
  if (step < 20000) {  
    push();
    translate(width / 2, height / 2);

    t = radians(step);
    ang = ((l-k)/k) * t;

    x = R * ((1-k) * Math.cos(t) + ((l*k) * Math.cos(ang)));
    y = R * ((1-k) * Math.sin(t) - ((l*k) * Math.sin(ang)));

    line(prevX, prevY, x, y,);
    pop();
    step+=4;

    prevX = x;
    prevY = y;
  }
}