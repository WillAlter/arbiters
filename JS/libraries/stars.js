let x, y;
let c;
let down;
let stars = [];
let sky;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  c = 255;

  sky = loadImage ('timeline-background.jpg');

  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star(random(width), random(height), random(255), random(0.1, 5), random(1));
  }
}

function draw() {
  background('rgba(0,0,0,0)');
  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }
}


class Star {
  constructor(tx, ty, tc, tf, td) {
    this.x = tx;
    this.y = ty;
    this.c = tc;
    this.f = tf;
    this.down = td;
  }

  showStar() {
    stroke(this.c)
    point(this.x, this.y);
  }

  twinkle() {
    if (this.c >= 255) {
      this.down = true;
    }
    if (this.c <= 0) {
      this.down = false;
    }

    if (this.down) {
      this.c -= this.f
    } else {
      this.c += this.f
    }
  }
}