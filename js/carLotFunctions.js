var CarLot = (function(modifyCars) {

  console.log("IIFE /3/ CarLotFunctions.js loaded");

  modifyCars.clickedStyling = function(car, color) {
    car.style.borderWidth = "6px";
    car.style.backgroundColor = color;
  }

  // Attempt 1 at resetting inline styling
  // //currently not working... Not sure how to force the inline styling BACK to what it was?
  // modifyCars.reset = function(car) {
  //   car.style.borderWidth = "3px" ;
  //   car.classlist.add(carCardClass);

  // }

  // Attempt 2 at resetting inline styling 
  // if (event.currentTarget === currently clicked card) {
  //   modifyCars.clickedStyling = function(car, color) {
  //     car.style.borderWidth = "6px";
  //     car.style.backgroundColor = color;
  //   } else {
  //   //currently not working... Not sure how to force the inline styling BACK to what it was?
  //     modifyCars.reset = function(car) {
  //     car.style.borderWidth = "3px" ;
  //     car.classlist.add(carCardClass);
  //   style="border:3px solid ${inventory[i].color}"
  //   }
  // }

  return modifyCars;
})(CarLot || {});
