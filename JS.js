
$("#search").keypress(function(event) {
	if (event.keyCode === 13){
		var word = $("#search").val();
		$("body").unmark()
		$('body').mark(word)
		console.log($("#search").val())
	}
})