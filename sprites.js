// Load Sprites

function getSprites() {
  //Use tilesets to get all sprites			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
          
  // Create a building sprite
  let texture2 = new PIXI.Texture(loader.resources["tileset.png"].texture﻿, new PIXI.Rectangle(192, 256, 64, 64));
  forge = new Sprite(texture2);
  forge2 = new Sprite(texture2);

  //Position the building sprite and add to stage      
  forge.x = 400;
  forge.y = 25;	
  app.stage.addChild(forge);

  forge2.x = 400;
  forge2.y = 250;	
  app.stage.addChild(forge2);

  // Get Ruins
  let ruins = new PIXI.Texture(loader.resources["TilesetRuins.png"].texture﻿, new PIXI.Rectangle(240, 100, 48, 50));
  box = new Sprite(ruins);

  box.x = 200;
  box.y = 42;	
  app.stage.addChild(box);

  // Get player
  let players = new PIXI.Texture(loader.resources["TilesetPeople.png"].texture﻿, new PIXI.Rectangle(470, 0, 60, 80));

  //Create the player sprite from the texture
  player = new Sprite(players);			

  //Position the player sprite on the canvas
  player.x = 0;
  player.y = 10;			
  // set its velocity
  player.vx = 0;
  player.vy = 0;			
  //Add the player to the stage
  app.stage.addChild(player);

  // Get Tree
  let texture4 = new PIXI.Texture(loader.resources["TilesetTrees.png"].texture﻿, new PIXI.Rectangle(386, 0, 140, 143));
  tree = new Sprite(texture4);

  tree.x = 200;
  tree.y = 360;	
  app.stage.addChild(tree);   
}