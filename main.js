let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight-10;

let mpos;

let player;
let foods = [];

let colors = [
    '#FFDC00',
    '#FCB102',
    '#00FF55',
    '#E8FF54',
    '#00FFA9'
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {

    mpos =  new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2, canvas.height/2, 25, "black");

    for(i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height
        let color = randomColor();
        let food = new Food(x, y, 20, randomColor());
        foods.push(food);
    }
    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(i = 0; i < foods.length; i++) {
        foods[i].draw(c);
    }

    player.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event) {
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        mpos.print();
    });
});
