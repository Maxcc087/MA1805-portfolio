let circleSizes = [];
let numCircles = 10;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(20);

  for (let i = 0; i < numCircles; i++) {
    circleSizes.push(random(10, 20));
  }
}

function draw() {
  background(20);

  for (let i = 0; i < numCircles; i++) {
    
    let angle = (TWO_PI / numCircles) * i + frameCount * 0.01;
    let x = width / 2 + cos(angle) * 80;
    let y = height / 2 + sin(angle) * 80;

    if (frameCount % 30 === 0) {
      circleSizes[i] = random(8, 20);
    }

    fill(0, 150, 255);
    noStroke();
    ellipse(x, y, circleSizes[i]);
  }
}
