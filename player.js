class Player extends Food{

    constructor(x, y, radius, color, name, stroke) {
        super(x, y, radius, color);
        this.name = name;
        this.stroke = stroke;
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

}

Object.assign(Player, Food);
