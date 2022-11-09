let x = 100
let y = 350;
let rl = 0;
let rlk = 0;
let ll = 0;
let llk = 0;
let rot = 0;
let dr = 0.01;
let legflag;
let rh = -1
let lh = 1;
let lhe = -1;
let rhe = -1;
let scene = 2;
function setup() {
  createCanvas(600, 600);
  legflag = false;
}

function draw() {
  background(220);
  if (scene == 2){
    human(x,y,rot,rh,rhe,lh,lhe,rl,rlk,ll,llk);
    updateHuman();
  }
}

function updateHuman(){
  x++;
  rl += dr;
  ll -= dr;
  rlk += dr;
  llk += dr;
  rh += 2*dr;
  lh -= 2*dr;
  rhe += dr;
  lhe += dr;
  
  if (rl >= 0.75){
    legflag = true
  }else if(rl <= 0){
    legflag = false
  }
  
  if (legflag){
    dr = -0.01
  }else{
    dr = 0.01
  }
  
  if(x >= 300){
    rot += 0.01;
    y += 1
    if (rot >= 1.5){
      rot = 1.5
      x = 445
      y = 500
      dr = 0
    }
  }
}

function human(x,y,rot,rh,rhe,lh,lhe,rl,rlk,rr,rrk){
  push();
    translate(x,y)
    rotate(rot)
    rect(-50,-100,100,200,10,10,10,10)
  
  //left arm  
  push();
      translate(-50,-85)
      rotate(lh)
      rect(0,0,20,55,10,10,10,10)
      push();
        translate(0,55)
        rotate(lhe)
        rect(0,0,20,65,10,10)
        push();
          translate(0,65)
          ellipse(10,10,20)
          ellipse(2,20,5,12)
          ellipse(7,20,5,12)
          ellipse(12,20,5,12)
          ellipse(17,20,5,12)
        pop();
      pop();
    pop();
  
    
    // right arm
    push();
      translate(50,-85)
      rotate(rh)
      rect(0,0,20,55,10,10,10,10)
      push();
        translate(0,55)
        rotate(rhe)
        rect(0,0,20,65,10,10,10,10)
        push();
          translate(0,65)
          ellipse(10,10,20)
          ellipse(2,20,5,12)
          ellipse(7,20,5,12)
          ellipse(12,20,5,12)
          ellipse(17,20,5,12)
        pop();
      pop();
    pop();
  
    // left leg
    push();
      translate(-40,100)
      rotate(rl)
      rect(0,0,20,50,5,5,5,5)
      push();
        translate(0,50)
        rotate(rlk)
        rect(0,0,20,50,5,5,5,5)
        push();
          translate(0,50)
          rect(0,0,20,30,10,10,10,10)
        pop();
      pop();
    pop();
    
    // right leg
    push();
      translate(20,100)
      rotate(ll)
      rect(0,0,20,50,5,5,5,5)
      push();
        translate(0,50)
        rotate(llk)
        rect(0,0,20,50,5,5,5,5)
        push();   
          translate(0,50)
          rect(0,0,20,30,10,10,10,10)
        pop();
      pop();
    pop();
    
  pop() 
}