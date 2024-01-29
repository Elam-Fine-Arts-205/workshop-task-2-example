let counter = 0;

let countInterval = setInterval(makeRedSquare, 1000);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function makeRedSquare(){
  noStroke();
  fill(255, 255, 0);
  rect(random(0,300), random(0,300), 60, 60);
  counter++;
  if (counter > 5){
    clearInterval(countInterval);
    counter = 0;
  }
}

function mousePressed() {
  countInterval = setInterval(makeRedSquare, 1000);
}

