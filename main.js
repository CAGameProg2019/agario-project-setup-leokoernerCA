let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

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
    for(i = 0; i < 100; i++) {
        foods[i].draw(c);
    }

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
