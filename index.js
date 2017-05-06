$(document).ready(function(){
	$(".mainCarousel").slick({
	  dots: true,
	  infinite: true,
	  speed: 800,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,	  
	  responsive: [
	  {
	  	breakpoint: 650,
	  	settings: "unslick"
	  }
	  ]

	});
});

$(document).ready(function(){
	$(".smallCarousel").slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	});
});

$("#search").keypress(function(event) {
	if (event.keyCode === 13){
		var word = $("#search").val();
		$("body").unmark()
		$('body').mark(word)
		console.log($("#search").val())
	}
})