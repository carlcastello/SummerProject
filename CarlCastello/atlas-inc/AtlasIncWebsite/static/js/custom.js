$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    $(".panel-group .panel").addClass("show");
	}
});

$(document).scroll(function() {
   if($(window).scrollTop() === 0) {
     $(".panel-group .panel").removeClass("show");
   }
});

