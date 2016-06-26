var CarLot = (function(modifyCars) {

console.log("IIFE /4/ quiz.js loaded");

function populatePage (inventory) {
    var carsToPage = document.getElementById("outputEl"), //The DOM ELEMENT FOR CARD OUTPUT
        textInputUpdaterEl = document.getElementById("textInputUpdater"), //the "TEXT INPUT" AREA
        outPutString = "", //Our String interpolation
        carDescription = "", //The "description" for the card -- Might need an array or counter?
        thisCardHere = "", //The WHOLE CARD you've clicked on. -- Might need an array or counter?
        counter = 1; //Our Counter

  // Loop over the inventory and populate the page
  for (var i = 0; i < inventory.length; i++) {
    if (i % 3 === 0) {
    outPutString += `<div class="row">`
    }
    outPutString += `
      <div class="col-md-4 carCardClass" id="carCard--${counter}" style="border:3px solid ${inventory[i].color}"> 
        <p>${inventory[i].make}</p>
        <p>${inventory[i].model}</p>
        <p>${inventory[i].year}</p>
        <p>${inventory[i].price}</p>
        <p>${inventory[i].color}</p>
        <p>${inventory[i].purchased}</p>
        <p class="carDescription">${inventory[i].description}</p>
      </div>`;
        if ((i+1) % 3 === 0 ) {
        outPutString += `</div>`
        }
      carsToPage.innerHTML = outPutString; //writes the carCards to the DOM
      counter++; //increases the counter each time through the loop
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
};

CarLot.loadInventory(populatePage);

  return modifyCars;
})(CarLot || {});

// console.log("IIFE /0/ ZERO Carlot?!", CarLot);
