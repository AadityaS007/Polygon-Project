class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.body)
  }
  display() {
    /**/
    if (this.body.speed < 3) {
      rectMode(CENTER)
      rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(225, this.Visibility)
      rect(this.body.position.x, this.body.position.y, this.width, this.height)
      pop();
    }
  }
}
