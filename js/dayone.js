$(document).ready(function(){
	$('#dayoneCarousel').slick({
	  fade: true,
	  speed: 500,
	  autoplay: true,
	  arrows: true,
	});	
	$("area").each(function(index, element) {
		var link = $(this);
		$(link).qtip({
			content: link.attr("title"),
			style: {
             	width: 160,
             	classes: 'qtip-dayone qtip-rounded'
           },
		});
	});
	$('#waterbagCarousel').slick({
	  fade: true,
	  speed: 500,
	  autoplay: true,
	  arrows: true,
	});	
});
