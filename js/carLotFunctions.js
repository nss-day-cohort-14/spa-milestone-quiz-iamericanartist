var CarLot = (function(modifyCars) {

  console.log("IIFE /3/ CarLotFunctions.js loaded");

  modifyCars.clickedStyling = function(car, color) {
    car.style.borderWidth = "6px";
    car.style.backgroundColor = color;
    car.classList.add("active");
  }

 modifyCars.resetValues = function() {
    var car = document.getElementsByClassName("carCardClass");
    for (var k=0; k<car.length; k++) {
      item=car[k];
      item.style.backgroundColor = "beige";
      item.style.borderWidth = "3px";
      item.classList.remove("active");
    };
  };

  return modifyCars;
})(CarLot || {});
