class Rain {
    constructor(numDrops, canvas_ctx) {
        // for each drop choose a random position along x axis
        this.drops = Array(numDrops).fill().map(() => {
            let raindrop_object = {
                // initialise position along x randomly
                // constant x position
                posx: Math.floor(Math.random() * canvas_ctx.canvas.width),
                // y changes based on width
                posy: Math.floor(Math.random() * 400), // offset
                // also constant
                width: Math.floor(Math.random() * 3) + 1, // can be 1-6
                length: canvas_ctx.canvas.height / 50,
            };
            return raindrop_object;
        });
        this.ctx = canvas_ctx;
    }

    draw_frame() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // for each rain drop, draw a rect
        this.ctx.fillStyle = 'white';
        this.drops.forEach((drop) => {
            // if drop is off screen, reset it
            if (drop.posy > this.ctx.canvas.height) {
                drop.posy = 0;
                // and reset x position
                drop.posx = Math.floor(Math.random() * this.ctx.canvas.width);
            }
            // draw a rect from current pos to where it should be based on weight.
            let new_y = drop.posy + drop.length * drop.width;
            this.ctx.fillRect(drop.posx, drop.posy, drop.width, new_y);
            drop.posy = new_y;
        });
    }
}

// function to sleep a given number of milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// on ducment load without jquery
document.addEventListener("DOMContentLoaded", async function (event) {
    const canvas = document.querySelector('#canvas');
    // get the context
    const ctx = canvas.getContext('2d');

    // create a new rain object
    const rain = new Rain(100, ctx);
    // draw the rain

    while (true) {
        rain.draw_frame();
        // sleep for 30 ms
        await sleep(30);
    }
});

// lemme tell u a joke
// there are 10 types of people in the world
// those who understand binary and those who don't
