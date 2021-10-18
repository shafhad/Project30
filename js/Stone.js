class Stone{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("rock.png");
        //this.smokeImage = loadImage("smoke.png");
        //this.trajectory =[];

        World.add(world, this.body);
    }

      display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();

        // if(this.body.velocity.x > 10 && this.body.position.x > 200){
        //     var position = [this.body.position.x, this.body.position.y];
        //     this.trajectory.push(position);
        // }

        // for(var i=0; i<this.trajectory.length; i++){
        //     image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        // }
      
      
      }
}
