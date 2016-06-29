var CarLot = (function(modifyCars) {

  console.log("IIFE /2/ eventListeners.js loaded");

  modifyCars.activateEvents = function() {
    var thisCardHere = document.getElementsByClassName("carCardClass");
    var card = null;

    for (var j = 0; j < thisCardHere.length; j++) {
      thisCardHere[j].addEventListener("click", function(event) {
        card = event.currentTarget;
        // console.log("IIFE /2/ current target ",card); //conLogs the whole card
        console.log("IIFE /2/ current target ",card.firstChild.nextSibling.nextSibling.nextSibling); //conLogs the "MODEL" of the card
        modifyCars.resetValues();
        modifyCars.clickedStyling(card, "white");
        textInputUpdater.value = ""; // clear input 
        textInputUpdater.focus(); // put cursor in the text input
      });
    // console.log("IIFE /2/ Each Card Here ", thisCardHere[j]); //this conLogs all of the cards as they go through the loop
    } // END - for loop

    textInputUpdater.addEventListener("keyup", function (event){ // ENTER Key listener on text field
      if (card === null) {
        alert("YOU NEED TO PICK A CAR FIRST");
      }
      var qwerty = card.lastChild.previousSibling;
      if (event.which === 13) {
        textInputUpdater.value = "";
        modifyCars.resetValues();
        textInputUpdater.blur();
        card = null;
        // console.log(">>Enter pushed, text added, input cleared", textInputUpdater.value);
      } else {
        qwerty.innerHTML = textInputUpdater.value;
        // console.log("updated description =", qwerty)
      }
    }); // END - textInputUpdater.addEventListener
  }; // END - modifyCars.activateEvents

  // if card is not selected then alert


  return modifyCars;
})(CarLot || {});
