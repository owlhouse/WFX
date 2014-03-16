$("document").ready(function() {
	$(".custom_masks_div, .about_div, .faqs_div").hide();
	$("#logo_hover").hide();

	$("#about").click(function(e) {
		e.preventDefault();
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".active_div").fadeOut(500).removeClass("active_div");
		$(".about_div").addClass("active_div").fadeIn(1000);
	});

	$("#custom_masks").click(function(e) {
		e.preventDefault();
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".active_div").fadeOut(500).removeClass("active_div");
		$(".custom_masks_div").addClass("active_div").fadeIn(1000);
	});

	$("#faqs").click(function(e) {
		e.preventDefault();
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".active_div").fadeOut(500).removeClass("active_div");
		$(".faqs_div").addClass("active_div").fadeIn(1000);
	});

	function strobe_logo() {
		$("#logo_hover").fadeTo(50, 0.5);
		$("#logo_hover").fadeTo(50, 0.2);
		$("#logo_hover").fadeTo(50, 0.5);
		$("#logo_hover").fadeTo(1250, 0.2);
	}

	$("#logo").mouseover(function() {
		for (var i=0; i<=10;i++) {
			strobe_logo();
		}
		$(this).mouseout(function() {
			$("#logo_hover").clearQueue();
			$("#logo_hover").stop();
			$("#logo_hover").fadeOut(500);
		});
	});
});