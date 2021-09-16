let g;
function setup() {
  createCanvas(400, 400);
  g = new pGraph(50, 100, 300, 200);
  g.addArray([1, 6, 3, 7, 3, 3])
}

function draw() {
  background(220);
  if (frameCount % 10 == 0){
    g.add(random(0, 1)) 
  }
  g.show()
}

function keyPressed(){
  if (key === 'e'){
     g.remove(0);
  }
}
