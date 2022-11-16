let x = 0
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
let scene = 1;
let fr = 0;
let fl = 0;
let br = 0;
let bl = 0;
let lamaflag;
let lamax = 100;
let nr = 0;
let spitx = 525;
let spity = 280;

let x1 = [];
let y1 = [];
let r = [];
let s = [];
let c = [];

let rx = []; 
let dy = [];
let dx = [];
let cx = []; 
let numLeaf = 80; 

function setup() {
  createCanvas(600, 600);
  legflag = false;
  lamaflag = false;


   for (let i = 0 ; i < numLeaf; i++)
    {
      x1.push(random(width));
      y1.push(random(height));
     r.push(random(-2*PI,2*PI));
      s.push(random(0.1,0.3));
      c.push(random(0,255));
      
     // cx.push(random(0,255));
      rx.push(random(-0.01,0.01));
      dx.push(random(-10,10));
      dy.push(random(-10,-10));
      
    }
  
}

function draw() {
 background(199,199,255);
for(let i=0; i < numLeaf; i++)
    {
      push();
      translate(300,300);
      leafCreature(x1[i],y1[i],s[i],r[i],c[i]);
      pop();
    }
   updateBack();
push();

 fill(100,200,50);
 rect(0,500,600,600);
 pop();
  if (scene == 1){


    





    drawlama(lamax,400,1)
    updatelama()
  }
  if (scene == 2){
    human(x,y,rot,rh,rhe,lh,lhe,rl,rlk,ll,llk);
    //creature();
    updateHuman();
    spit(spitx,spity)
    updatespit()

  }



}

function updatespit(){
  spitx += 1.2
  spity += 0.5
  
  if (spitx >= 650){
    spitx = -130;
    spity = 300;
    scene = 2;
  }
  
  if (spitx >= 350 && scene == 2){
      spitx = 625
      spity = 525
      push()
        fill(0,0,100,125)
        ellipse(390,475,15,20)
        ellipse(375,500,15,20)
        ellipse(400,525,15,20)
      pop()
  }
}

function spit(spitx,spity){
  push();
    translate(spitx,spity)
    stroke(0,0,100)
    rotate(0.2)
    strokeWeight(4)
    line(10,-10,70,-40)
    line(0,0,70,0)
    line(10,10,70,40)
  pop();
}

function updatelama()
{
  br += dr
  fl += dr
  bl -= dr
  fr -= dr
  lamax += 1

  if (br >= 0.5){
    lamaflag = true
  }else if(br <= -0.5){
    lamaflag = false
  }
  
  if (lamaflag){
    dr = -0.01
  }else{
    dr = 0.01
  }
  
  if (lamax >= 350){
    lamax = 350
    dr = 0
    br = 0
    fl = 0
    bl = 0
    fr = 0
    nr += 0.1
    spit(spitx,spity)
    updatespit()
    if (nr >= 0.4){
      nr = 0.4
    }
  }
}

function drawlama(x,y,s){
  push()
  translate(x,y)
  scale(s)

  
  //lama
    noStroke()
    fill(145, 120, 100)
    //lamabody
    fill(145, 120, 100)
    rect(-100,-50,200,100,10)
    //lama head
    push()

      rotate(nr)
      rect(45,-150,50,100,20,20,0,0)
      fill(110, 90, 70)
      quad(50,-145,50,-200,100,-179,100,-155)
      triangle(50,-190,57,-220,65,-183)
      triangle(45,-192,50,-222,60,-185)
      arc(100,-167,25,25,1.5*PI,0.5*PI)
      arc(50,-173,40,52,0.5*PI,1.5*PI)
      fill(0)
      ellipse(65,-175,10,15)
      ellipse(100,-172,5,5)
      fill(255)
      ellipse(66,-174,5,10)
      noFill()
      stroke(0)
      arc(100,-164,10,10,2*PI,PI)
      noStroke()
    pop()
    //lama legs
    fill(145, 120, 100)
    push()
      translate(70,50)
      rotate(fr)
      rect(0,0,25,75,0,0,20,20)
    pop()
    push()
      translate(60,50)
      rotate(fl)
      rect(0,0,25,75,0,0,20,20)
    pop()
    push()
      translate(-100,45)
      rotate(bl)
      quad(0,0,25,0,35,75,10,75)
    pop()
    push()
      translate(-90,45)
      rotate(br)
      quad(0,0,25,0,35,75,10,75)
    pop()
    ellipse(-125,-35,50)
    stroke(0)
    //lama saddle
    fill(55,27,7)
    arc(-20,-50,120,120,2*PI,PI)
    fill(75,47,15)
    arc(-20,-50,100,100,2*PI,PI)
  pop()
}

function updateHuman(){
  x += 1.5;
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
  
  if(x >= 250){
    rot += 0.01;
    y += 1
    if (rot >= 1.5){
      rot = 1.5
      x = 450
      y = 500
      dr = 0
    }
  }
}

function human(x,y,rot,rh,rhe,lh,lhe,rl,rlk,rr,rrk){
  push();
    translate(x,y)
    rotate(rot)
    push();
    fill(100,100,255);
    rect(-50,-100,100,200,10,10,10,10)
    pop();
  creature();
  //left arm  
  push();
      fill(100,100,255); //blue
      translate(-50,-85)
      rotate(lh)
      rect(0,0,20,55,10,10,10,10)
      push();
        translate(0,55)
        rotate(lhe)
        rect(0,0,20,65,10,10)
        push();
        fill(250,216,186); // tan 
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
      fill(100,100,255);
      rotate(rh)
      rect(0,0,20,55,10,10,10,10)

      push();
        translate(0,55)
        rotate(rhe)
        rect(0,0,20,65,10,10,10,10)
        push();
          translate(0,65)
          fill(250,216,186);
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
      fill('#402A12');
      translate(-40,100)
      rotate(rl)
      rect(0,0,20,50,5,5,5,5)
      push();
        translate(0,50)
        rotate(rlk)
        rect(0,0,20,50,5,5,5,5)
        push();
          fill(0);
          translate(0,50)
          rect(0,0,20,30,10,10,10,10)
        pop();
      pop();
    pop();
    
    // right leg
    push();
    fill('#402A12');
      translate(20,100)
      rotate(ll)
      rect(0,0,20,50,5,5,5,5)
      push();
        translate(0,50)
        rotate(llk)
        rect(0,0,20,50,5,5,5,5)
        push();   
          translate(0,50)
          fill(0);
          rect(0,0,20,30,10,10,10,10)
        pop();
      pop();
    pop();
    
  pop() 
}

function creature()
{
  push();//FIRST PUSH
  
  translate(0,-150);
  //BACK HAIR
  push();
  fill('#452A1D');
  ellipse(0,-50,50);
  ellipse(-20,-40,50);
  ellipse(20,-40,50);
  ellipse(30,-20,25);
  ellipse(-30,-20,25);
  pop();
  //FACE
  push();
  fill(250,216,186);
  noStroke();
  ellipse(0,0,70,100);
  ellipse(0,20,100,60);
  pop();
  //EYES
  ellipse(-15,-10,10,10);
  ellipse(15,-10,10,10);
 
  
  ellipse(-15,-10,2,2);
  ellipse(15,-10,2,2);
  
  //EYEBROWS
  push();
  strokeWeight(3);
  line(-30,-25,-4,-20)
  line(30,-25,4,-20)
  pop();
  
  //NOSE
  line(0,0,10,8);
  line(10,8,0,8);
  //MOUTH
  push();
  fill(255,10,10);
  ellipse(0,30,40,15);
  pop();
  rect(-10,23,10,10);
  rect(3,23,10,10);
 
  //BLUSH
  push();
  noStroke();
  fill(255,200,200)
  ellipse(30,10,20,10);
  ellipse(-30,10,20,10)
  pop();
  
  
  
  pop();//LAST POP
}


function leafCreature(x1,y1,s,r,c)
{
  push();
  scale(s);
  rotate(r);
  translate(x1,y1);
  fill(c,150,150);
  ellipse(0,0,50,100);
  line(0,0,0,100);
  pop();
}

function updateBack ()
{
  for (let i = 0; i < numLeaf ; i++)
    {
      x1[i]=x1[i]+dx[i];
      y1[i]=y1[i]+dy[i];
      r[i]=r[i]+rx[i];
      //c[i]=c[i]+cx[i];
      
      //BOUNDING BOX NEEDS WORK
      
      //BOUNDING BOX
      if (x1[i]>width+300|| x1[i] <-300)
          {
            dx[i]=-dx[i];
          }
      if(y1[i]>height+300||y1[i]<-300)
        {
          dy[i]=-dy[i];
        }
        
    }
}