var CarLot = (function(modifyCars) {

  console.log("IIFE /1/ CarLot.js loaded"); //must load first!

  var inventory = [];

  modifyCars.getInventory = function () {
    return inventory;
  };

  modifyCars.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();
    inventoryLoader.addEventListener("load", function () {
      var JSONParsed = JSON.parse(this.responseText);
      inventory = JSONParsed.cars;
      // console.log("inventory", inventory[3].make, inventory[3].model);
      callback(inventory);
    });
  };

  return modifyCars;
})(CarLot || {});

// console.log("IIFE /1/ First Carlot?!", CarLot);
// console.log("IIFE /1/ Carlot is ",CarLot);