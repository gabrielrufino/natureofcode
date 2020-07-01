function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  stroke('purple');
  strokeWeight(10);
}

function draw() {
  const randomX = Math.floor(Math.random() * (windowWidth + 1));
  const randomY = Math.floor(Math.random() * (windowHeight + 1));

  point(randomX, randomY)
}