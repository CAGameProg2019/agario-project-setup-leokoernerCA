class Player extends Food{

    constructor(x, y, radius, color, name, stroke, maxSpeed) {
        super(x, y, radius, color);
        this.name = name;
        this.stroke = stroke;
        this.maxSpeed = maxSpeed;
    }

    update(mouse) {
        let vel = new Vector(mouse.x, mouse.y);
        vel.subVector(this);

        let dist = vel.magnitude();
        if(dist > 0) {
            vel.toDirVec();

            vel.scale(this.maxSpeed);
            if(dist < this.radius) {
                vel.scale(dist/this.radius);
            }

            this.addVector(vel);
        }

    }

    draw(c) {
        c.lineWidth = this.radius*.075;
        c.strokeStyle = this.stroke;
        super.draw(c);
        c.stroke();
        c.fillStyle = '#ffffff';
        c.textAlign = 'center'
        c.lineWidth = 5;
        c.textBaseline = 'middle';
        let fontSize = Math.round(this.radius*.33);
        c.font = fontSize + 'px helvetica';
        c.strokeStyle = '#000000';
        c.strokeText(this.name, this.x, this.y);
        c.fillText(this.name, this.x, this.y);
    }

    spitFood() {
        let x = (this.x + this.radius + 5);
        let y = (this.y + this.radius + 5);
        let color = randomColor();
        let food = new Food(x, y, 10, randomColor());
        foods.push(food);
    }

}

Object.assign(Player, Food);
