var moving,fixed

function setup() {
  createCanvas(600,600);

  fixed=createSprite(400, 200, 50, 50);
  fixed.debug=true
  fixed.shapeColor="green"
  moving=createSprite(300,100,50,50)
  moving.debug=true
  moving.shapeColor="green"


  

}

function draw() {
  background(0);

  moving.y=mouseY
  moving.x=mouseX

  if(moving.x-fixed.x < fixed.width/2 + moving.width/2 
    && fixed.x-moving.x < fixed.width/2 + moving.width/2
    && moving.y-fixed.y < fixed.height/2 + moving.height/2 
    && fixed.y-moving.y < fixed.height/2 + moving.height/2 ){ 
      
      fixed.shapeColor="red";
      moving.shapeColor="red" 
    } 
  else {
      fixed.shapeColor="green";
       moving.shapeColor="green" 
      }

  
  drawSprites();
}