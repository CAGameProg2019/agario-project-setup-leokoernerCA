let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight-10;

const FOOD_COUNT = 100;
let mpos;
let player;
let foods = [];
let x;
let y;
let name = "";

let strokeColors = ['#006633', '#00B399', '#0033FF', '#00FF99', '#00B3E6',
		  '#00B333', '#0066E6', '#009966', '#00FF99', '#004D4D',
		  '#00B300', '#009900', '#00B3B3', '#0080B3', '#00991A',
		  '#0099E6', '#00FF1A', '#001A66', '#00331A', '#00FFCC',
		  '#00994D', '#0066CC', '#008000', '#003300', '#0080CC',
		  '#00664D', '#001AFF', '#0066FF', '#00B3FF', '#00B399',
		  '#0066B3', '#00991A', '#009999', '#00B31A', '#00E680',
		  '#008066', '#009980', '#00FF80', '#00FF33', '#009933',
		  '#003380', '#00CC00', '#00E64D', '#0080CC', '#0000B3',
		  '#004D66', '#00B380', '#004D4D', '#00E6E6', '#0066FF']
let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
function generateFood() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height
    let color = randomColor();
    let food = new Food(x, y, 10, randomColor());
    foods.push(food);
}
function init() {

    mpos =  new Vector(canvas.width/2, canvas.height/2);

    let name = prompt("Enter Name");
    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];
    player = new Player(canvas.width/2, canvas.height/2, 25, color, name, stroke, 4);

    for(i = 0; i < FOOD_COUNT; i++) {
        generateFood();
    }
    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height)

	player.update(mpos);

    for(i = 0; i < foods.length; i++) {
        let eaten = player.intersects(foods[i]);
        if(!eaten) {
            foods[i].draw(c);
        } else {
            player.addMass(foods[i].mass);
            foods.splice(i,1);
            i--;
        }
    }

    while(foods.length < FOOD_COUNT) {
        generateFood();
    }


    player.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event) {
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
