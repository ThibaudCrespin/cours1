class Particle {
    constructor(canvas) {
        this.w = this.h = 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    update(canvas) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || (this.x + this.w) > canvas.width) {
            const sign = this.x < 0 ? -1 : 1;
            this.speedX = -(Math.random() * this.speedX + 1) * sign;
        }
        if (this.y < 0 || (this.y + this.h) > (canvas.height - 100)) {
            const sign = this.y < 0 ? -1 : 1;
            this.speedY = -(Math.random() * this.speedY + 1) * sign;
        }
    }

    remove() {
        this.w = this.h = this.x = this.y = this.speedX = this.speedY = 0;
    }

    collide(ball) {
        if(ball.x > this.x && ball.x < this.x+this.w && ball.y > this.y && ball.y < this.y+this.h) {
            this.remove();
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

export default Particle;