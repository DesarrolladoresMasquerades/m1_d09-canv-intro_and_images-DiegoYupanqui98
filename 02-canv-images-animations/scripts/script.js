console.log("JS Loaded");

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

const getWindowWidth = () => window.visualViewport.width;

const getWindowHeight = () => window.innerHeight;


const resizeCanvasToWindow = () => {
    canvas.width = getWindowWidth();
    canvas.height = getWindowHeight();
}

window.onload = resizeCanvasToWindow;
window.onresize = () => {
    resizeCanvasToWindow();
    //sillyRectangle.draw();
}


    
    //ctx.beginPath();
    //ctx.moveTo(0, 0)
    canvas.onmousemove = (event) =>{
          
                console.log("mouse coordinates: ", event.clientX, event.clientY)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.moveTo(event.clientX, event.clientY)
                ctx.fillstyle = "blue";
    
                ctx.arc(event.clientX, event.clientY,5,0,Math.PI*2)
                ctx.fill();
                ctx.stroke();
                
            
    //ctx.lineTo(event.clientX, event.clientY);
    
    //ctx.closePath();
}
/*
const sillyRectangle = {
    "ctx": ctx,
    draw(){
        this.ctx.fillRect(canvas.width/2,canvas.height/2, canvas.width/2 -50,canvas.height/2-50)

    }
}
*/