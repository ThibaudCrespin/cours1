export default class Particle {
    constructor(canvas) {
        this.w = this.h = Math.random() * 5 + 5;
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
        if (this.y < 0 || (this.y + this.h) > canvas.height) {
            const sign = this.y < 0 ? -1 : 1;
            this.speedY = -(Math.random() * this.speedY + 1) * sign;
        }
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}