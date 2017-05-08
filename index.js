$(document).ready(function(){
	if ($(window).width() > 650) {
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
		  }, 
		  {
		  	breakpoint: 1024,
		  	settings: "slick"
		  }
		  ]

		});
	}
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