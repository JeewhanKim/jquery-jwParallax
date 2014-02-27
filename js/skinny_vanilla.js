$(function(){

	if($(window).scrollTop() < 100) $(".scroll_down").fadeIn(200);

	$("#intro h1").hide().delay(200).fadeIn(600);
	$("#intro p").hide().delay(400).fadeIn(600);
	$(".scroll_down").hide().delay(600).fadeIn(400);
	$("#first_2 h2").hide();

	$("#icon_paper").delay(600).animate({'opacity':1});
	$("#icon_who").delay(700).animate({'opacity':1});
	$("#icon_laptop").delay(800).animate({'opacity':1});
	$("#icon_contact").delay(900).animate({'opacity':1});

	$("#nav li:eq(0)").addClass('active');
	$("#nav li:eq(1)").addClass('gradient_step_01');
	$("#nav li:eq(2)").addClass('gradient_step_02');
	$("#nav li:eq(3)").addClass('gradient_step_03');
	$("#nav li:eq(4)").addClass('gradient_step_04');

	$(".scroll_down").mouseover(function(){
		$(this).find('img').attr('src', './images/scroll_arrow_dark.png');
	}).mouseout(function(){
		$(this).find('img').attr('src', './images/scroll_arrow.png');
	});

	$(".menu_icons img").mouseover(function(){
		$(this).animate({'opacity':0.5});
	}).mouseout(function(){
		$(this).animate({'opacity':1});
	});

	// Scroll Events
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();

		// Intro
		if(scrollTop >= 100) $(".scroll_down").fadeOut(200);
		else $(".scroll_down").fadeIn();

		if(scrollTop >= ($("#first").offset().top)/2  ) {
			$("#first .grid_box:first-child").find('.img_left').fadeIn(1400);
			$("#first .grid_box:first-child").find('h2').fadeIn(1600);
			$("#first .grid_box:first-child").find('p').fadeIn(2200);

		}
		if(scrollTop >= ($("#first").offset().top - 300)  ) {
			$("#first .grid_box").find('.img_left').fadeIn(1400);
			$("#first .grid_box").find('h2').fadeIn(1600);
			$("#first .grid_box").find('p').fadeIn(2200);
		}
		if(scrollTop <= ($("#intro").offset().top)/2  ) {
			removeNavClass($("#nav li"));
			$("#nav li:eq(0)").addClass('active');
			$("#nav li:eq(1)").addClass('gradient_step_01');
			$("#nav li:eq(2)").addClass('gradient_step_02');
			$("#nav li:eq(3)").addClass('gradient_step_03');
		}
		if(scrollTop >= ($("#first_2").offset().top - ($("#first_2").height()/2))) {
			removeNavClass($("#nav li"));
			$("#nav li:eq(0)").addClass('gradient_step_01');
			$("#nav li:eq(1)").addClass('active');
			$("#nav li:eq(2)").addClass('gradient_step_01');
			$("#nav li:eq(3)").addClass('gradient_step_02');
			$("#nav li:eq(4)").addClass('gradient_step_03');
			$("#first_2 h2").fadeIn(400);

		}
		if(scrollTop >= ($("#first_3").offset().top - ($("#first_3").height()-100))) {
			$("#first_3 h2").fadeIn(400);
			removeNavClass($("#nav li"));
			$("#nav li:eq(0)").addClass('gradient_step_02');
			$("#nav li:eq(1)").addClass('gradient_step_01');
			$("#nav li:eq(2)").addClass('active');
			$("#nav li:eq(3)").addClass('gradient_step_01');
			$("#nav li:eq(4)").addClass('gradient_step_02');

			// $("#first_2 h2").hide();
			
		}
		if(scrollTop >= ($("#white_bg").offset().top - ($("#white_bg").height()/2))) {
			$("#white_bg").animate({'opacity':1});
		}
		if(scrollTop >= ($("#white_bg_2").offset().top - ($("#white_bg_2").height()/2))) {
			$("#white_bg_2 p").fadeIn(400);

			// $("#first .grid_box").find('.img_left').hide();
			// $("#first .grid_box").find('h2').hide();
			// $("#first .grid_box").find('p').hide();
		}
		if(scrollTop >= ($("#white_bg_3").offset().top - ($("#white_bg_3").height()/2))) {
			$("#white_bg_3 p").animate({'opacity':1});
		}
		if(scrollTop >= ($("#second_2").offset().top - ($("#second_2").height()/2))) {
			$("#second_2").delay(200).animate({'opacity':1}, 600);
		}
		if(scrollTop >= ($("#second_3").offset().top - ($("#second_3").height()/2))) {
			$("#second_3 h2").fadeIn(400);
			$("#nav li:eq(0)").addClass('gradient_step_03');
			$("#nav li:eq(1)").addClass('gradient_step_02');
			$("#nav li:eq(2)").addClass('gradient_step_01');
			$("#nav li:eq(3)").addClass('active');
			$("#nav li:eq(4)").addClass('gradient_step_01');
		}
		if(scrollTop >= ($("#third").offset().top - ($("#third").height()/2))) {
			$("#third .flexslider").animate({'opacity':1}, 600);
		}
		if(scrollTop >= ($("#fourth").offset().top - ($("#fourth").height()/2))) {
			$("#fourth h2").fadeIn(400);
			removeNavClass($("#nav li"));
			$("#nav li:eq(0)").addClass('gradient_step_04');
			$("#nav li:eq(1)").addClass('gradient_step_03');
			$("#nav li:eq(2)").addClass('gradient_step_02');
			$("#nav li:eq(3)").addClass('gradient_step_01');
			$("#nav li:eq(4)").addClass('active');
		}

		// Scroll - Hide Effect
		if (scrollTop >= (($("#fourth").offset().top)+ $(window).height()) ) {
			$("#fourth h2").hide();
		} else if (scrollTop >= (($("#second_3").offset().top)+ $(window).height()) ) {
			$("#second_3 h2").hide();
		} else if (scrollTop >= (($("#white_bg_3").offset().top)+ $(window).height()) ) {
			$("#white_bg_3 p").hide();
		} else if (scrollTop >= (($("#white_bg_2").offset().top)+ $(window).height()) ) {
			$("#white_bg_2 p").hide();
		} else if (scrollTop >= (($("#first_3").offset().top) + $(window).height()) ) {
			$("#first_3 h2").hide();
		} else if (scrollTop >= (($("#first").offset().top)+ $(window).height()) ) {
			$("#first .grid_box .img_left, #first .grid_box h2, #first .grid_box p").hide();
		} else if(scrollTop >= (($("#first_2").offset().top)+$(window).height()) ) {
			$("#first_2 h2").hide();
		}

		if(scrollTop < ($("#first_2").offset().top - $("#first_2").height()) ) {
			$("#first_2 h2").hide();
		} else if(scrollTop < ($("#first").offset().top - $("#first").height()) ) {
			$("#first .grid_box .img_left, #first .grid_box h2, #first .grid_box p").hide();
		} else if(scrollTop < ($("#first_3").offset().top - $("#first_3").height()) ) {
			$("#first_3 h2").hide();
		} else if(scrollTop < ($("#white_bg_2").offset().top - $("#white_bg_2").height()) ) {
			$("#white_bg_2 p").hide();
		} else if(scrollTop < ($("#white_bg_3").offset().top - $("#white_bg_3").height()) ) {
			$("#white_bg_3 p").hide();
		} else if(scrollTop < ($("#second_3").offset().top - $("#second_3").height()) ) {
			$("#second_3 h2").hide();
		} else if(scrollTop < ($("#fourth").offset().top - $("#fourth").height()) ) {
			$("#fourth h2").hide();
		}
	});
	
	function removeNavClass(obj){
		$(obj).siblings().removeClass('active');
		$(obj).siblings().removeClass('gradient_step_01');
		$(obj).siblings().removeClass('gradient_step_02');
		$(obj).siblings().removeClass('gradient_step_03');
		$(obj).siblings().removeClass('gradient_step_04');
	}

	$("#nav li:eq(0)").click(function(){
		$(window).stop().scrollTo( 'header', 1400, { easing:'easeInOutQuint' } );
	});
	$("#nav li:eq(1), #icon_paper").click(function(){
		$(window).stop().scrollTo( '#first_2', 1400, { easing:'easeInOutQuint' } );
	});
	$("#nav li:eq(2), #icon_who").click(function(){
		$(window).stop().scrollTo( '#first_3', 1400, { easing:'easeInOutQuint' } );
	});
	$("#nav li:eq(3), #icon_laptop").click(function(){
		$(window).stop().scrollTo( '#second_3', 1400, { easing:'easeInOutQuint' } );
	});
	$("#nav li:eq(4), #icon_contact").click(function(){
		$(window).stop().scrollTo( '#fourth', 1400, { easing:'easeInOutQuint' } );
	});

	$(".scroll_down").click(function(){
		$(this).fadeOut(100);
		$(window).stop().scrollTo( '#first', 1400, { easing:'easeInOutQuint' } );
		$("#nav li").siblings().removeClass('active');
		$("#nav li:eq(1)").addClass('active');
	});

	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};

	$.easing.easeInOutQuint = function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
});