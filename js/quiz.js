var CarLot = (function(modifyCars) {

  console.log("IIFE /4/ quiz.js loaded");

  function populatePage (inventory) {
      var carsToPage = document.getElementById("outputEl"), //The DOM ELEMENT FOR CARD OUTPUT
          textInputUpdaterEl = document.getElementById("textInputUpdater"), //the "TEXT INPUT" AREA
          outPutString = "", //Our String interpolation
          carDescription = "", //The "description" for the card -- Might need an array or counter?
          thisCardHere = "", //The WHOLE CARD you've clicked on. -- Might need an array or counter?
          carAvailabile = "",
          counter = 1; //Our Counter

    // Loop over the inventory and populate the page with string interpolation
    for (var i = 0; i < inventory.length; i++) {
      // Availability of cars
      if (inventory[i].purchased === false) {
        carAvailabile = `Sign & Drive!`;
      } else {
        carAvailabile = `Sold! `;
      }
      if (i % 3 === 0) { //set to OPEN a ROW div every 4th time through the loop (and on the first time through)
      outPutString += `<div class="row">`
      }
      outPutString += `
        <div class="col-md-4 carCardClass" id="carCard--${counter}" style="border:3px solid ${inventory[i].color}"> 
          <p>${inventory[i].make}</p>
          <p>${inventory[i].model}</p>
          <hr>
          <p>${inventory[i].year}</p>
          <p>$${inventory[i].price} + tax/title/fees</p>
          <p>${inventory[i].color}</p>
          <p class="availability">${carAvailabile}</p>
          <p class="carDescription">${inventory[i].description}</p>
        </div>`;
          if ((i+1) % 3 === 0 ) { //set to CLOSE a ROW div every 3rd time through the loop (i+1 then 1%3 = 0 is false / then 2%3 = false / then 3%3 is true! = </div> )
          outPutString += `</div>`
          }
        carsToPage.innerHTML = outPutString; //writes the carCards to the DOM
        counter++; //increases the counter each time through the loop
        console.log("IIFE /4/ Current inventory includes a", inventory[i].make, inventory[i].model);
    }; // END - for loop

    // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
  }; // END - function populatePage

  CarLot.loadInventory(populatePage);

  return modifyCars;
})(CarLot || {});
