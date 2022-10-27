class Rain {
    constructor(numDrops) {
        // for each drop choose a random position along x axis
        this.drops = Array(numDrops).fill().map(() => {
            return Math.floor(Math.random() * width);
        });
    }

    draw() {


    }
}

// on DOM load
document.onload = () => {
    // get the canvas element
    const canvas = document.getElementById('canvas');
    // get the context
    const ctx = canvas.getContext('2d');
    // set the canvas width and height
    canvas.width = 500; canvas.height = 500;
    // set the fill colour to black and fill the canvas
    ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    // set the stroke colour to white
    ctx.strokeStyle = 'white';

    // draw a line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 500);
    ctx.stroke();
    // end path
    ctx.closePath();

}