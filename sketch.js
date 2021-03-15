var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count = 0;

var gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(25)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(gamestate === "play"){
    for(i = 10; i<=width/2-100; i += 80){
      textSize(35);
      text("500", i, 600);
    }

    for(s = 330; s<=width-250; s += 80){
      textSize(35);
      text("100", s, 600);
    }

    for(e = 570; e<=width-50; e += 80){
      textSize(35);
      text("200", e, 600);
    }

    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }

    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }
  } 
  if(particles!=null) {
    particles.display(); 

    if(particles.body.position.y > 760){
      if(particles.body.position.x < 300){
        score += 500;
        particles = null;
      }
      if(particles.body.position.x > 301 && particles.body.position.x < 600){
        score += 100;
        particles = null;
      }
    }
  }
}

function mousePressed(){
  if(gamestate !== "end"){
    particles = new Particle(mouseX, 10, 10);
  }
}