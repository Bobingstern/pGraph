# pGraph
A simple p5js library to easily add a graph to your sketch

<h1>Installation</h1>

Simply download the ``pGraph.js`` and put it into you project folder. Make sure to add it to the ```index.html``` file also. (See the file)

<h1>Usage</h1>

Once you've downloaded the file you start using it easily.

```js
// Create a new graph
let g = new pGraph(x, y, width, height)
// Add a number
g.add(num)
// Remove a number by index
g.remove(index)
// Add an array of numbers
g.addArray([1, 2, 3, 4])
// Remove an array of numbers
g.removeArray([1, 2, 3, 4])
//Remove every 5th element from graph
g.trim(5);
// Show the graph
g.show()
```

Example (You can also find it in [sketch.js](https://github.com/Bobingstern/pGraph/blob/main/sketch.js) or an online example [here](https://editor.p5js.org/25apatel/sketches/6tn77EFoC))

```js
let g;
let r;
let fps = 0;
function setup() {
  createCanvas(400, 400);
  g = new pGraph(50, 100, 300, 200);
  g.addArray([-5, -3, -6, -2, -1])
  r = random(-10, 10)
}

function draw() {
  background(220);
  if (frameCount % 1 == 0){
    for (var i=0;i<2;i++){
      g.add(r)
      r = r+random(-5, 5)
    }
    
  }
  g.show()
  text((60/deltaTime), 30, 30)
  text(g.getLength(), 30, 50)
}

function keyPressed(){
  if (key === 'e'){
     g.trim(2)
  }
}
```

