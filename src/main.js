import Particle from './particle';
import Ball from './ball';
import Paddle from './paddle';
import './main.css';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let rightPressed = false;
let leftPressed = false;

const init =() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
init();

window.addEventListener('resize', init, false);

canvas.style.backgroundColor = "#ffd500";

const particles = [];
const NUM_PARTICLES = 100;

const ball = new Ball(canvas);
const paddle = new Paddle(canvas);

for(let i = 0; i < NUM_PARTICLES; i++){ particles.push( new Particle(canvas) );}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    paddle.draw(ctx, canvas);
    paddle.move(leftPressed, rightPressed, canvas);

    ball.update(canvas, paddle);
    ball.draw(ctx);

    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
        p.collide(ball);
    });

    requestAnimationFrame(animate);
};
animate();

const keyDownHandler = (e) => {
    if(e.keyCode === 39) {
        rightPressed = true;
    }
    else if(e.keyCode === 37) {
        leftPressed = true;
    }
};

const keyUpHandler = (e) => {
    if(e.keyCode === 39) {
        rightPressed = false;
    }
    else if(e.keyCode === 37) {
        leftPressed = false;
    }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
