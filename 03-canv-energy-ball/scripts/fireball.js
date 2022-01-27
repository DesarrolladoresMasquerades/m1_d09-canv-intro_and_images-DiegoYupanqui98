console.log("fireball loaded")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const fireball = new Image()
fireball.src = "img/fireBall.png";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




let frameNumber;
const energyBall = {
    animating : false,
    img: fireball,
    x: 0,
    y: 0,
    rotation : 0,
    move(){
        
        if(this.x< canvas.width-100 && this.y === 0){
            this.x+=10;
        }
        else if(this.y<canvas.height-50 && this.x >= canvas.width-100){
            this.y+=10;
        }
        else if(this.x > 0 && this.y >= canvas.height-50) {
            this.x-=10;
        }
        else {
            this.y-=10
        }
        console.log("x: ", this.x)
        console.log("y: ", this.y)
    },
    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.move();
        ctx.drawImage(this.img,
            250, 0,
            100, 100,
            this.x, this.y,
            100, 100);
            if(this.animating)
            frameNumber = requestAnimationFrame(this.draw.bind(this));
        }
}

document.getElementById("canvas").onclick = ()=>{
 energyBall.animating = !energyBall.animating
 energyBall.draw()
}