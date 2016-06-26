var CarLot = (function(modifyCars) {

  console.log("IIFE /3/ CarLotFunctions.js loaded");

  modifyCars.clickedStyling = function(car, color) {
    car.style.borderWidth = "6px";
    car.style.backgroundColor = color;
  }
  modifyCars.reset = function(car) {
    car.style.borderWidth = "3px" ;
    car.classlist.add(carCardClass);

  }



  return modifyCars;
})(CarLot || {});

// console.log("IIFE /2/ Second Carlot?!", CarLot);
