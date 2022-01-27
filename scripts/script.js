console.log("JS Loadesd")

/*
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255,0,0,0.7)";
ctx.fillRect(100,100,100,100)

// start the path
const capuccinoCircle = (action) =>{
    action === "draw" ? ctx.strokeStyle = 'black': ctx.strokeStyle = 'white'; // !
    ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(window.innerWidth/2, window.innerHeight/2, 200, 0, Math.PI * 2);
ctx.lineWidth = 1;
ctx.stroke();
ctx.closePath();

}


// starting position is x=50, y=50

// draw the line that has final coordinates x=250, y=50
let angle = 0;

let frames = 0
const drawActionId = setInterval(() => {
    randomColor();
    if(frames < 180 ) {
        capuccinoCircle("draw");
        drawLine("draw",angle);
    }
    if(frames > 180 && frames < 360){
        capuccinoCircle("erase");
        drawLine("erase",angle);
    }
    angle+=2*Math.PI/180;    
    if(angle >= 2*Math.PI){
        angle = 0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}, 250);

const drawLine = (action,angle) =>{
    action === "draw" ? ctx.strokeStyle = 'black': ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
    ctx.lineTo(window.innerWidth/2+200*Math.cos(angle),window.innerHeight/2+200*Math.sin(angle));
    ctx.stroke();
    ctx.closePath();
}

const randomColor = () =>{
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}




// .stroke() executes the drawing
*/


const canvas = document.querySelector("canvas");
canvas.width = 0.7*window.innerWidth;
canvas.height = 0.7*window.innerHeight;

window.onresize = () =>{
    canvas.width = 0.7*window.innerWidth;
    canvas.height = 0.7*window.innerHeight;
}
