class Paddle {
    constructor(canvas) {
        this.w = 100;
        this.h = 10;
        this.x = (canvas.width - this.w)/2;
        this.speed = 7;
    }

    move(left, right, canvas) {
        if(right && this.x < canvas.width - this.w) {
            this.x += this.speed;
        }
        else if(left && this.x > 0) {
            this.x -= this.speed;
        }
    }

    draw(ctx, canvas) {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.h, this.w, this.h);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

export default Paddle;