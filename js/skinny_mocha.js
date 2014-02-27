var animationSceneSwitch = 0;

$(function(){

	$(window).resize(function(){
		$('#ani_01').css({'width':$('.scene01_layer').width()});
		$('#ani_02').css({'width':$('.scene01_layer').width()});
		$('#ani_03').css({'width':$('.scene01_layer').width()});
		$('#ani_04').css({'width':$('.scene01_layer').width()});
	});

	$(".scene01_layer").mousemove(function(e){
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var width = $(this).width();
		var height = $(this).height();

		var positionX;
		var positionY;
		var widthSize;
		var heightSize;

		if(e.pageX < width/2) {
			positionX = (-((width/2)-Math.abs(e.pageX))) / 20;
			widthSize = width + positionX;
			widthSizeLv02 = width;
			widthSizeLv03 = width;
			widthSizeLv04 = width;
		}
		else {
			positionX = (Math.abs(e.pageX) - (width/2)) / 20;
			widthSize = width - positionX;
			widthSizeLv02 = width - positionX * 1.5;
			widthSizeLv03 = width - positionX * 2.3;
			widthSizeLv04 = width - positionX * 2.5;
		}

		positionY = (Math.abs(e.pageY) - (width/2)) / 50;
		heightSize = height - positionY;
		heightSizeLv02 = height - positionY * 1.5;
		heightSizeLv03 = height - positionY * 2.3;
		heightSizeLv04 = height - positionY * 2.5;

		$('#ani_01').css({'left': positionX + "px", 'width':widthSize });
		$('#ani_02').css({'left': positionX*1.5 + "px", 'width':widthSizeLv02 });
		$('#ani_03').css({'left': positionX*2.3 + "px", 'width':widthSizeLv03 });
		$('#ani_04').css({'left': positionX*2.5 + "px", 'width':widthSizeLv04 });

		$('#ani_01').css({'top': positionY + "px", 'height':heightSize });
		$('#ani_02').css({'top': positionY*1.5 + "px", 'height':heightSizeLv02 });
		$('#ani_03').css({'top': positionY*2.3 + "px", 'height':heightSizeLv03 });
		$('#ani_04').css({'top': positionY*2.5 + "px", 'height':heightSizeLv04 });

		$("#ani_01 img, #ani_02 img, #ani_03 img, #ani_04 img").css({'height':height});
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


