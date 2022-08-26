class Ball {
    constructor(ctx, canvas, ballSize){
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ballSize = ballSize;
        this.positionX = 0;
        this.positionY = 0;

        this.state = new State1();
    }


    setState(state){
        this.state = state;
    }

    print(){
        this.state.print(this);
    }
}


class State1{
    print(ball){
        ball.ctx.clearRect(0, 0, ball.width, ball.height)
    }
}


const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';

const ball = new Ball( ctx, canvas, 10 );