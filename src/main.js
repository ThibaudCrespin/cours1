import Particle from './particle';
import './main.css';

const canvas = document.querySelector('#canvas');

const init =() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
init();

window.addEventListener('resize', init, false);

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
canvas.style.backgroundColor = "#ffd500";

const particles = [];
const NUM_PARTICLES = 100;

for(let i = 0; i < NUM_PARTICLES; i++){ particles.push( new Particle(canvas) );}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
    });

    requestAnimationFrame(animate);
};
animate();

/*const changeColor = () => {
    ctx.fillStyle = document.querySelector('#item').value;
    canvas.style.backgroundColor = document.querySelector('#background').value;
};*/
