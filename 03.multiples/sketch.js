let rgb = [255, 0, 0];
let select = 0;
let words = ["test", "hello", "world"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(select==0){
    rgb = [255, 0, 0];
  }else{
    rgb = [0, 255, 0];
  }

  fill(rgb);
  let i = 1;
  while(i<=500){
    let r = random(30)
    circle(i, i+r, 30+r);
    i = i+3;
  }

  fill ([0, 255, 0]);
  for(i=0; i<=600; i=i+1.4){
     let r = random(1)
     //     x,    y,  size
    circle(i+100, i, mouseX);
  }
  fill(200);
  textSize(90);
  let w = words[2];
  if(mouseX>100){
    w = words[0]
  }
  text(w, mouseX, mouseY);

}

function mouseClicked(){
  if(select==0){
    select=1;
  }else{
    select=0;
  }

}
