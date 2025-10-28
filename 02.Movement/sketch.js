let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(255, 204, 0);
  ellipse(width / 2, height /2, 250, 250);

  noStroke();
  fill(0);
  rect(97, 169, 79, 12);
  rect(223, 169, 79, 12);

  noFill();
  stroke(130);
  strokeWeight(20);
  arc(width / 2, height / 2 + 20, i, 30, 0, PI);

  i = (i + 0.5) % 200;
  
}