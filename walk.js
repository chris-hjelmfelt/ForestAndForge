var arrived = true;
var walking = false;
let testAngles = false; 
let angles = [false,false];
let arrivedWork = false;
let arrivePause = 0;
var pace;
let stone = 0;

// this happens automatically if you click a sprite that is clickable
function onClick() {  
  if (walking == true){
    clearInterval(pace);
  }
  walking = true;
  pace = setInterval(clickwalk, 100, this);
  openMenu(this);
}

// Click a sprite to walk to it - called by onClick()
function clickwalk(t) {  
  arrived = true;
  if (player.x < t.x - 5){
    player.x += 10;
    arrived = false;
  }
  if (player.x > t.x + 6){
    player.x -= 10;
    arrived = false;
  }
  if (player.y < t.y - 9){
    player.y += 10;
    arrived = false;
  }
  if (player.y > t.y + 2){
    player.y -= 10;
    arrived = false;
  } 
  if (arrived == true){
    clearInterval(pace);
  }
}

function freewalk() {
  // find boundaries
  if (player.x > 1100-50)			
    player.x = 1100-50;
  if (player.y > 650-55)  
    player.y = 650-55;
  if (player.x < 0)			
    player.x = 0;
  if (player.y < 0)  
    player.y = 0;	
}

function WorkerWalk(thisWorker, thisBuilding, num) { 
  let workLocX = workerInfo[1].workX; 
  let workLocY = workerInfo[1].workY; 
  let xDiff1 = thisBuilding.x - thisWorker.x;
  let yDiff1 = thisBuilding.y - thisWorker.y;
  let xDiff2 = workLocX -  thisWorker.x;
  let yDiff2 = workLocY -  thisWorker.y;  
  thisWorker.visible = true; 
  
  if (testAngles == false) {
    if (thisBuilding.x - workLocX > 0) { 
      angles[0] = true;
    }
    if (thisBuilding.y - workLocY > 0) { 
      angles[1] = true;
    }
    testAngles = true;
  }
  
  if ((-5 <= xDiff1 && xDiff1 <= 5) && (-5 <= yDiff1 && yDiff1 <= 5)) {
    arrivePause += 1;
    if (arrivePause >= 100) {
      arrivedWork = false;
      arrivePause = 0;
    }
  }
  if ((-5 <= xDiff2 && xDiff2 <= 5) && (-5 <= yDiff2 && yDiff2 <= 5)) {
    arrivePause += 1;
    if (arrivePause >= 500) {
      arrivedWork = true;
      stone = stone += 1;
      message.text = "Stone: " + stone;
      arrivePause = 0;
    }
  }
  

  if (arrivedWork == false) { // You are stepping out and then back, we need to move in a single direction
    if(thisWorker.x < workLocX && angles[0] == false) {
      thisWorker.x += 5;
    }
    if(thisWorker.x > workLocX && angles[0] == true) {
      thisWorker.x -= 5;
    }
    if(thisWorker.y < workLocY && angles[1] == false) {
      thisWorker.y += 5;
    }
    if (thisWorker.y > workLocY && angles[1] == true) {
      thisWorker.y -= 5;
    }
  }   
  if (arrivedWork == true) {
    if(thisWorker.x < thisBuilding.x && angles[0] == true) 
      thisWorker.x += 5;
    if(thisWorker.x > thisBuilding.x && angles[0] == false) 
      thisWorker.x -= 5;
    if(thisWorker.y < thisBuilding.y && angles[1] == true)
      thisWorker.y += 5;
    if (thisWorker.y > thisBuilding.y && angles[1] == false)
      thisWorker.y -= 5;
  }  

  
}