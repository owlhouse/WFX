$(document).ready(function() {
    
    var width = $(window).height();
    $("#landing_wrapper").css({
        'height' : width + 'px'
    });
    /*$(".mask-view").click(function(){
    	$("#mask-enlarge-reveal").slideToggle(700);
    });*/
    $(".mask-wrapper").each(function(){
        $(this).click(function() {
            $("#mask-enlarge-reveal .mask-wrapper").remove();
            var newObj = $(this);
            newObj.clone().appendTo("#mask-enlarge-reveal").hide().fadeIn(500);
        });
    });
    var height = $(window).innerHeight();
    var counter = 0;
    
    $(".prev-button").hide();

    $(".next-button").click(function() {
    	if (counter < 3) {
            $(".prev-button").fadeIn(500);
    		counter++;
    		var curSection = "#about-wrapper section:eq("+ counter +")";
    		$(curSection).removeClass("not-active").addClass("active");
            
            if (counter == 3) {
                $(".next-button").fadeOut(500);
            }
    	}      
    });
    $(".prev-button").click(function() {
        
    	var curSection = "#about-wrapper section:eq("+ counter +")";
    	if (counter > 0) {
            $(".next-button").fadeIn(500);
    		counter--;
    		$(curSection).addClass("not-active").removeClass("active");
    		curSection = "#about-wrapper section:eq("+ counter +")";
    		$(curSection).addClass("active");
            
             if (counter == 0) {
                $(".prev-button").fadeOut(500);
            }
    	}
    });
});
