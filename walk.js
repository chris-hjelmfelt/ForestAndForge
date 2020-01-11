var arrived = true;
var walking = false;
var pace;
function onClick() {
  console.log(walking);
  if (walking == true){
    clearInterval(pace);
  }
  walking = true;
  pace = setInterval(clickwalk, 100, this);
}

function clickwalk(t) {  
  console.log("walking");
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
    
  // // make player come back around
  // if (player.x > 512)			
  //   player.x = 0;
  // if (player.y > 512)  
  //   player.y = 0;
  // if (player.x < 0)			
  //   player.x = 512;
  // if (player.y < 0)  
  //   player.y = 512;
}