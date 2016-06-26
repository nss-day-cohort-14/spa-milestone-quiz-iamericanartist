var CarLot = (function(modifyCars) {

  console.log("IIFE /2/ eventListeners.js loaded");

  modifyCars.activateEvents = function() {
    var thisCardHere = document.getElementsByClassName("carCardClass");
    var card;
    for (var j = 0; j < thisCardHere.length; j++) {
      thisCardHere[j].addEventListener("click", function(event) {
        card = event.currentTarget;
        console.log("IIFE /2/ current target ",card); //conLogs the whole card
        // console.log("IIFE /2/ current target ",card.firstChild.nextSibling.nextSibling.nextSibling); //conLogs the "MODEL" of the card
       
        modifyCars.clickedStyling(card, "white");
        textInputUpdater.value = ""; // clear input 
        textInputUpdater.focus(); // put cursor in the text input

      });
    // console.log("IIFE /2/ Each Card Here ", thisCardHere[j]); //this conLogs all of the cards as they go through the loop
    } //for Loop END

      textInputUpdater.addEventListener("keyup", function (event){ // ENTER Key listener on text field
        var qwerty = card.lastChild.previousSibling;
        if (event.which === 13) {
          textInputUpdater.value = "";
          // console.log(">>Text added, input cleared", textInputUpdater.value);
          // console.log(">>Enter was pushed");
        } else {
          qwerty.innerHTML = textInputUpdater.value;
          console.log("rrrrrrr", qwerty)
        }
        // qwerty.innerHTML = textInputUpdater.value;
        //   console.log("rrrrrrr", qwerty)
      })



  };
  return modifyCars;
})(CarLot || {});

// console.log("IIFE /3/ Second Carlot?!", CarLot);
