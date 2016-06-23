var CarLot = (function(modifyCars) {

  console.log("CarLot.js loaded");
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
      callback(inventory);
    });
  };
  return modifyCars;
})(CarLot || {});

