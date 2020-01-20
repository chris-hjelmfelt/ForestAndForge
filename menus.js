let boxMenu;

function addMenus() {
  //Create and add the Van Menu sprite
  let menusprite1 = new PIXI.Texture(loader.resources["menu.jpg"].texture﻿, new PIXI.Rectangle(0, 0, 400, 200));
  boxMenu = new Sprite(menusprite1)
  boxMenu.x = 700;
  boxMenu.y = 450;
  boxMenu.visible = false;     
  app.stage.addChild(boxMenu);
}

function openMenu(building) {
  console.log(building.name);
  if (building.name == "box1"){
    boxMenu.visible = true;
    message.text = "Box";
  } else if (building.name == "forge1"){
    boxMenu.visible = true;
    message.text = "Forge 1";
  } else if (building.name == "forge2"){
    boxMenu.visible = true;
    message.text = "Forge 2";
  }else {
    boxMenu.visible = false;
    message.text = "";
  }
}



