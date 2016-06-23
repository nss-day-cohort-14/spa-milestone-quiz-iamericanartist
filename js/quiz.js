console.log("quiz.js loaded");


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  console.log(">Our Inventory: ",inventory);
  for (var i = 0; i < inventory.length; i++) {
    // inventory[i] +=
    

  };


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

