class Ball {
    constructor(canvas) {
        this.d = 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = 3;
        this.speedY = 3;
    }

    static get x() {
        return this.x;
    }

    static get y() {
        return this.y;
    }

    update(canvas, paddle) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < this.d || (this.x + this.d) > canvas.width) {
            const sign = this.x < 0 ? -1 : 1;
            this.speedX = -this.speedX * sign;
        }
        if (this.y < this.d) {
            const sign = this.y < 0 ? -1 : 1;
            this.speedY = -this.speedY * sign;
        } else if ((this.y - this.d) > canvas.height) {
            if(this.x > paddle.x && this.x < (paddle.x + paddle.w)) {
                const sign = this.y < 0 ? -1 : 1;
                this.speedY = -this.speedY * sign;
            }
            else {
                alert("GAME OVER");
                document.location.reload();
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.d, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}

export default Ball;