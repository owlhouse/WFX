$(document).ready(function() {
    
    var width = $(window).height();
    $("#landing_wrapper").css({
        'height' : width + 'px'
    });
    $(".mask-view").click(function(){
    	$("#mask-enlarge-reveal").toggle(550);
    });
    var height = $(window).innerHeight();
    var counter = 0;
    alert(counter);

    $(".next-button").click(function() {
    	if (counter < 3) {
    		counter++;
    		var curSection = "#about-wrapper section:eq("+ counter +")";
    		$(curSection).removeClass("not-active").addClass("active");
    	}
    });
    $(".prev-button").click(function() {
    	var curSection = "#about-wrapper section:eq("+ counter +")";
    	if (counter > 0) {
    		counter--;
    		$(curSection).addClass("not-active").removeClass("active");
    		var curSection = "#about-wrapper section:eq("+ counter +")";
    		$(curSection).addClass("active");
    	}
    });
});