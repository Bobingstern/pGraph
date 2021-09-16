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
// Show the graph
g.show()
```

Example (You can also find it in [sketch.js](https://github.com/Bobingstern/pGraph/blob/main/sketch.js) or an online example [here](https://editor.p5js.org/25apatel/sketches/6tn77EFoC))

```js
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
```

