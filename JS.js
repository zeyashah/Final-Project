$(document).ready(function() {

    $(".button").click(function() {
	    // find the parent of this .button and grab the next sibling with the class modal 
	    var modal = $(this).parent().next(".modal");
	    // show the modal
	    modal.show();
	});

    $(".close").click(function() {
     	// find the closest parent of this .close that has the class modal
     	var modal = $(this).closest(".modal");
     	// hide the modal
    	modal.hide();
  	});

    $(".modal").click(function() {
      // click on the class modal
      $(".modal").hide();
      // hide the modal and clear the clouded background screen
    });
	
   // // Get the modal
   //  var modal = document.getElementById('myModal');

   //  // Get the button that opens the modal
   //  var btn = document.getElementById("myBtn");

   //  // Get the <span> element that closes the modal
   //  var span = document.getElementsByClassName("close")[0];

   //  // When the user clicks the button, open the modal 
   //  btn.onclick = function() {
   //      modal.style.display = "block";
   //  }

   //  // When the user clicks on <span> (x), close the modal
   //  span.onclick = function() {
   //      modal.style.display = "none";
   //  }

   //  // When the user clicks anywhere outside of the modal, close it
   //  window.onclick = function(event) {
   //      if (event.target == modal) {
   //          modal.style.display = "none";
   //      } 
   //  }


   $("#search").keypress(function(event) {
		if (event.keyCode === 13){
		var word = $("#search").val();
		$("body").unmark()
		$('body').mark(word)
		console.log($("#search").val())};
	})

});
