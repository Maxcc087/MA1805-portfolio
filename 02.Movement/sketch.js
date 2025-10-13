let home = 55;
let incre = 1;
let name = "Max Hui fljr"
let myVar = false;
let car = "broken"
let pet;
console, log(pet)

function setup() {
  createCanvas(400, 400);
  pet = "cat"
  console.log(pet)
  car = car + " letter" + " add this text"
  console.log(car)
}

function draw() {
  //background(220);
  //circle(50, 50, 25)
  circle(50, 50, 25);

  // The text
  text(car, mouseX, mouseY)
  
}