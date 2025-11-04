let img;
let hum;
let capture;
let video;

function preload() {
  img = loadImage('lava-flow.jpg');
  hum = loadSound("lava-loop-3-28887.mp3");
  video = createVideo('152085-802335503_small.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  video.hide();
  video.play();
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, 500);
  image(capture,0, 0, 320, 240);
  filter(INVERT);
  circle(50, 50, 50);

  image(video, 400, 0, 350, 240);
}

function mouseClicked() {
  hum.loop();
  hum.amp(0.5);
  video.loop(0.2);
}