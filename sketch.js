let graphs = [];
const m = 3, n = 3;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB, 100);
  noFill();
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      graphs.push(new Graph(120 + width * i / m, 120 + height * j / n));
    }
  }
} 

function draw() {
  graphs.forEach(g => {
    g.display();
  });
}

class Graph {
  constructor(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.step = 0;
    this.R = Math.floor(random(90, 120));
    this.r = Math.floor(random(20, this.R - 20));
    this.p = Math.floor(random(10, this.r - 10));
  }

  display() {
    if (this.step < 40000) {
      push();
      translate(this.centerX, this.centerY);
      let t = radians(this.step);
      let k = this.r / this.R;
      let l = this.p / this.r;
      let ang = ((l - k) / k) * t;
  
      this.x = this.R * ((1 - k) * Math.cos(t) + ((l * k) * Math.cos(ang)));
      this.y = this.R * ((1 - k) * Math.sin(t) - ((l * k) * Math.sin(ang)));
      
      let h = Math.floor((((this.step / 150 + this.centerX))) % 100);
      stroke(h, 60, 80);
      line(this.prevX, this.prevY, this.x, this.y);
      pop();
      this.step += 8;
      this.prevX = this.x;
      this.prevY = this.y;
    }
  }
}