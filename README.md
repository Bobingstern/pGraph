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
class pGraph{
  
  constructor(x1, y1, w, h){
    this.left = createVector(x1, y1)
    this.size = createVector(w, h)
    this.inc;
    this.points = []
    this.greatestY = 0;
    this.lowestY = -1;
  }
  show(){
    fill(255)
    rect(this.left.x, this.left.y, this.size.x, this.size.y)
    push()
    textSize(this.size.x/30)
    stroke(0)
    fill(0)
    text(round(this.greatestY), this.left.x-this.size.x/30, this.left.y+10)
    text(round(this.lowestY), this.left.x-this.size.x/30, this.left.y+this.size.y)
    pop()
    
    if (this.points.length > 0){
      this.inc = this.size.x/this.points.length
      for (var i=0;i<this.points.length;i++){
        push()
        translate(this.left.x, this.left.y)
        
        circle(i*this.inc, map(this.points[i], this.lowestY, this.greatestY, 0, this.size.y), 1)
        if (i > 0){
          line(i*this.inc, map(this.points[i], this.lowestY, this.greatestY, 0, this.size.y), (i-1)*this.inc, map(this.points[i-1], this.lowestY, this.greatestY, 0, this.size.y))
        }
        pop()
        
        
      }
      
    }
  }
  add(y){

    if (y > this.greatestY){
      this.greatestY = y
    }
    if (y < this.lowestY){
      this.lowestY = y
    }
    if (y <= 0){
      //y = 0.01;
    }
    this.points.push(y)
  }
  addArray(arr){
    for (var i=0;i<arr.length;i++){
      this.add(arr[i])
    }
  }
  removeArray(arr){
    for (var i=0;i<arr.length;i++){
      if (arr[i] >= 0 && arr[i] < this.points.length-1){
        this.remove(arr[i])
      }
      
    }
  }
  getLength(){
    return this.points.length
  }
  
  
  remove(i){
    if (i >= 0 && i<this.points.length){
      this.points.splice(i, 1)
    }
    
  }
  trim(factor){
    if (factor > 0 && factor < this.points.length-1){
      for (var i=this.points.length-1;i>=0;i--){
        if (i%factor == 0){
          this.points.splice(i, 1)
        }
      }
    }
    
  }
}
```

