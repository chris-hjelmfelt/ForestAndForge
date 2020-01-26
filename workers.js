var workers = []; 
let workerInfo = [];

// Info about workers, buildings, etc.
function getInfo() {
  // Get data from places.json
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fillInfo(xhttp.responseText);    
    }
  };
  xhttp.open("GET", "WorkerInfo.json", true);
  xhttp.send();

  // Use JSON to fill the locations array with proper info
  function fillInfo(xhttp) {
    let stuff = JSON.parse(xhttp);
    for (let i=0; i<10; i++) {
      workerInfo[i] = stuff[i];
    }  
  }
}
getInfo()

function workerSpriteSetup() {
  let workerSprite1 = new PIXI.Texture(loader.resources["TilesetPeople.png"].texture﻿, new PIXI.Rectangle(676, 474, 50, 54));
  //let workerSprite2 = new PIXI.Texture(loader.resources["TilesetPeople.png"].texture﻿, new PIXI.Rectangle(676, 562, 50, 54));
  for(let i=0; i < 10; i++) {
      workers.push(new Sprite(workerSprite1));
      workers[i].vx = 0;
      workers[i].vy = 0;    			
      workers[i].scale.set(0.7,0.7);
      app.stage.addChild(workers[i]);
      workers[i].visible = false;           
      workers[i].x =  workerInfo[i].homeX;
      workers[i].y =  workerInfo[i].homeY;	
      workerInfo[i].worker = workers[i]; 
  }
    
  /*
  // Get Worker   
  worker1 = new Sprite(workerSprite1);
  worker2 = new Sprite(workerSprite2);			
  worker1.x = 180;
  worker1.y = 460;			
  worker1.vx = 0;
  worker1.vy = 0;			
  worker1.scale.x = 0.7;
  worker1.scale.y = 0.7;
  app.stage.addChild(worker1);
    
  worker2.x = 760;
  worker2.y = 230;			
  worker2.vx = 0;
  worker2.vy = 0;			
  worker2.scale.x = 0.7;
  worker2.scale.y = 0.7;
  app.stage.addChild(worker2);
  */
}



