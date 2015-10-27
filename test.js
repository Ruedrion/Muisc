var y = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var w = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var r = [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25];
var aT = 0.1;
var aL = 0.7;
var dT = 0.3;
var dL = 0.1;
var sT = 0.2;
var sL = dL; 
var rT = 0.5; 
var env;
var osc;
function setup() {
createCanvas(windowWidth, windowHeight);
env = new p5.Env(aT, aL, dT, dL, sT, sL, rT);;
osc = new p5.Oscillator('sine');
osc.amp(env);
osc.start();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw()
}

function draw() {
background(30);
colorMode(HSB);
    for(index = 0; index < 20; index++){
        if(y[index] < 0){
            y[index] = windowHeight;
            w[index] = random(width);
            r[index] = random(25,175);
            h[index] = random(359);
        }
        else{
            y[index]=y[index]-(1.75-index/15);
        }
    }
    for(index = 0; index < 20; index++){
            stroke(0,0,0);
            fill(h[index], 127, 255, 115);
            ellipse(w[index], y[index], r[index], r[index]);
    }
    
}
function mousePressed(){
    for(index = 0; index < 20; index++){
            stroke(0,0,0);
            fill(h[index], 127, 255, 115);
            ellipse(w[index], y[index], r[index], r[index]);
		var d = dist(mouseX, mouseY, w[index], y[index]);
		if (d < r[index] - 20){
			h[index] = random(359);
			env.play(noise);              
		}
	}
}