// Load Sprites
function getSprites() {
  //Use tilesets to get all sprites			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
          
  let tree, background, stone;

  let map = new PIXI.Texture(loader.resources["maptest1.jpg"].texture﻿, new PIXI.Rectangle(0, 0, 1000, 600));
  background = new Sprite(map); 
  background.x = 0;
  background.y = 0; 
  background.scale.x = 1.1;
  background.scale.y = 1.1;
  // add background
  app.stage.addChild(background);

   // Get box sprite from ruins tileset
  let ruins = new PIXI.Texture(loader.resources["TilesetRuins.png"].texture﻿, new PIXI.Rectangle(240, 100, 44, 45));
  box = new Sprite(ruins);  
  box.name = "box1";
  box.x = 250;
  box.y = 100;	
  // Opt-in to interactivity
  box.interactive = true;
  box.buttonMode = true; // Shows hand cursor
  box.on('pointerdown', onClick); // Pointers normalize touch and mouse
  app.stage.addChild(box);

  // Get building sprite from ruins tileset
  let ruins2 = new PIXI.Texture(loader.resources["TilesetRuins.png"].texture﻿, new PIXI.Rectangle(480, 480, 100, 96));
  forge = new Sprite(ruins2);
  forge.name = "forge1";
  forge2 = new Sprite(ruins2);
  forge2.name = "forge2";
  //Position the building sprite and add to stage      
  forge.x = 140;
  forge.y = 400;	
  // Opt-in to interactivity
  forge.interactive = true;
  forge.buttonMode = true; // Shows hand cursor
  forge.on('pointerdown', onClick); // Pointers normalize touch and mouse
  app.stage.addChild(forge);
  
  forge2.x = 730;
  forge2.y = 250;
  // Opt-in to interactivity
  forge2.interactive = true;
  forge2.buttonMode = true; // Shows hand cursor
  forge2.on('pointerdown', onClick); // Pointers normalize touch and mouse	
  app.stage.addChild(forge2);

  // Get building sprite from ruins tileset
  let ruins3 = new PIXI.Texture(loader.resources["TilesetRuins.png"].texture﻿, new PIXI.Rectangle(622, 340, 50, 82));
  stone = new Sprite(ruins3);
  //Position the building sprite and add to stage      
  stone.x = 140;
  stone.y = 220;	
  app.stage.addChild(stone);

  // Get player
  let players = new PIXI.Texture(loader.resources["TilesetPeople.png"].texture﻿, new PIXI.Rectangle(470, 26, 50, 54));

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
  let trees = new PIXI.Texture(loader.resources["TilesetTrees.png"].texture﻿, new PIXI.Rectangle(386, 0, 140, 143));
  tree = new Sprite(trees);
  tree2 = new Sprite(trees);
  tree3 = new Sprite(trees);
  tree4 = new Sprite(trees);

  tree.x = 250;
  tree.y = 490;	
  app.stage.addChild(tree);  
  tree2.x = 430;
  tree2.y = 480;	
  app.stage.addChild(tree2);  
  tree3.x = 630;
  tree3.y = 510;	
  tree3.scale.x = 0.8;
  tree3.scale.y = 0.8;

  app.stage.addChild(tree3);  
  tree4.x = 850;
  tree4.y = 490;	
  app.stage.addChild(tree4);   
}