import Particle from './particle';
import './main.css';

const canvas = document.querySelector('#canvas');

const init =() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
init();

window.onresize = init();

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';

const particles = [];
const NUM_PARTICLES = 100;

for(var i = 0; i < NUM_PARTICLES; i++){
    particles.push( new Particle(canvas) );
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
    });

    requestAnimationFrame(animate);
};
animate();
