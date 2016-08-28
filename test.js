var y = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var w = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var r = [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25];
var aT = 0.1;
var aL = 0.7;
var dT = 0.3;
var dL = 0.1;
var sT = 0.2;
var sL = dL; 
var rT = 0.5;
var env;
var osc;
var reverb;
function setup() {
createCanvas(windowWidth, windowHeight);
env = new p5.Env(aT, aL, dT, dL, sT, sL, rT);;
osc = new p5.Oscillator('sine');
reverb = new p5.Reverb();
osc.amp(env);
osc.freq(440);
reverb.process(osc, 3, 20);
osc.start();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw()
}

function draw() {
background(30);
colorMode(HSB);
blendMode(LIGHTEST);
    for(index = 0; index < 25; index++){
        if(y[index] < 0){
            y[index] = windowHeight;
            w[index] = random(width);
            r[index] = random(25,305);
            h[index] = random(359);
        }
        else{
            y[index]=y[index]-(1.75-index/15);
        }
    }
    for(index = 0; index < 25; index++){
            noStroke();
            fill(h[index], 327, 255);
            ellipse(w[index], y[index], r[index], r[index]);
    }
    
}
function mousePressed(){
    for(index = 0; index < 25; index++){
            noStroke();
            fill(h[index], 127, 255);
            ellipse(w[index], y[index], r[index], r[index]);
		var d = dist(mouseX, mouseY, w[index], y[index]);
		if (d < r[index] - 20){
			h[index] = random(359);
            var fre = map(mouseY, 0, height, 440, 240); 
            osc.freq(fre);
			env.play();              
		}
	}
}