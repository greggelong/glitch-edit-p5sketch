/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
for (let i = 0; i<20 ; i++){
  console.log(i);
}
console.log("hello");

let x = 20; // set variables
let y = 20;
let spx =-1;
let spy =-1;

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255,120,12);
  scale(10);
  stroke(255,0,0);
  point(20,24);
  
}

function draw() {
  //background(220);
  loadPixels();  // use pixexl array 
  x+= spx;
  y+=spy;
  nextpix1 = get(x,y);  // check if the pixel is turned on or off
  nextpix2 = get(x+1,y); // need to check a few pixels 
  nextpix3 = get (x, y+1);
  
  if (nextpix1[0]>0 || nextpix2[0]>0 || nextpix3[0]>0){
   
   x=random(width);   // if on set to a random postion on the canvas
   
   y=random(height)
   if (random(1)>0.5){
    spx*=-1; 
   }else{
    spy*=-1; 
   }
  }
  
   if (x > width || x<0){   // check edges
    spx*=-1;
  }
  if (y > height || y< 0){
    
    spy*=-1;
  }
  
  set(x,y,[255,255,0,255]);
  updatePixels(); 
    
}
