console.log("quiz.js loaded");


function populatePage (inventory) {
    var carsToPage = document.getElementById("outputEl");
    var outPutString = "";
    var counter = 1;
  // Loop over the inventory and populate the page
  // console.log("Our Inventory: ",inventory);

  for (var i = 0; i < inventory.length; i++) {
    if (i % 3 === 0) {
    outPutString += `<div class="row">`
    }
    outPutString += `
      <div class="col-md-4" id="carCard--${counter}"> 
        <p>${inventory[i].make}</p>
        <p>${inventory[i].model}</p>
        <p>${inventory[i].year}</p>
        <p>${inventory[i].price}</p>
        <p>${inventory[i].color}</p>
        <p>${inventory[i].purchased}</p>
        <p>${inventory[i].description}</p>
      </div>`;
        if ((i+1) % 3 === 0 ) {
        outPutString += `</div>`
        }

      carsToPage.innerHTML = outPutString;
      counter++;
  };

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

