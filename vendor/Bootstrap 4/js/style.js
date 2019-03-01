$(document).ready(function(){
	$('.video').fadeIn(1000);
	$('h2').eq(0).css({"margin-right":"-500%"});
	$('h2').eq(1).css({"margin-left":"-500%"});
	
	$('h2').eq(0).delay(1000).animate({"margin-right":"0%"},500);
	$('h2').eq(1).delay(2000).animate({"margin-left":"0%"},1000);
	
	$('#banner-one').delay(5000).fadeOut();
	$('#banner-two').delay(5500).slideDown(500);
	$('#button-scroll').delay(5500).fadeIn();
	//$('#banner-one').delay(14000).fadeOut();
	//$('#banner-two').delay(16000).slideDown(500);
	$('#navbar').delay(7000).fadeIn(1000);
	//$('#navbar').delay(17000).fadeIn(1000);
	var name = 0;
	if (name==0) {
			$('.menu-item-custom').delay(8000).slideDown(1000);
	}
	$('.navbar-link-custom').click(function(){
		name=$(this).attr('title');
		if (name=="Menu") {
			$('.contact-item-custom').fadeOut();
			$('.setting-item-custom').fadeOut();
			$('.menu-item-custom').delay(500).slideDown(500);
		}else if(name=="My Contact"){
			$('.menu-item-custom').fadeOut();
			$('.setting-item-custom').fadeOut();
			$('.contact-item-custom').delay(500).slideDown(500);
		}else if(name=="Settings"){
			$('.menu-item-custom').fadeOut();
			$('.contact-item-custom').fadeOut();
			$('.setting-item-custom').delay(500).slideDown(500);
		}
	});

	$('.menu-link-custom').hover(function(){
		//$(this).addClass("daya");
		$(this).find('i.icon').show("slow");
	});
	
	$('.menu-link-custom').mouseleave(function(){
		$(this).find('i.icon').hide("very fast");
	});

	$('#home2').click(function(){
		$('#banner-two').css("filter","blur(5px)");
		$('#banner-two').animate({width: "50%"},300);
		$('#banner-two').animate({margin: "auto"},300);
		$('#banner-two').animate({marginTop: "10%"},300);
		$('.navbar-link-custom').animate({fontSize: "12px"},100);
		$('.menu-link-custom').animate({fontSize: "12px"},100);
		$('.form-control').animate({fontSize: "12px"},100);
		$('.btn-form').animate({fontSize: "12px"},100);
		$('#home2').fadeOut();
		$('#home1').fadeIn();
		$('#banner-two').hide("fast");
		$('#banner-three').delay(1000).show("fast");
		return false;
	});

	$('.btn-trans').click(function(){
		$('#banner-two').fadeOut(500);
		$('.fake-loading').delay(600).fadeIn();
		$('.fake-loading .fa').eq(0).show(function(){
			$(this).css({
				'animation-name': 'bounce',
				'animation-duration': '0.5s',
				'animation-iteration-count': '10',
				'animation-delay': '0.5s',
				'animation-fill-mode': 'forwards',
				'animation-timing-function': 'ease-in-out'
			});
		});
		$('.fake-loading .fa').eq(1).show(function(){
			$(this).css({
				'animation-name': 'bounce',
				'animation-duration': '0.5s',
				'animation-iteration-count': '10',
				'animation-delay': '0.6s',
				'animation-fill-mode': 'forwards',
				'animation-timing-function': 'ease-in-out'
			});
		});
		$('.fake-loading .fa').eq(2).show(function(){
			$(this).css({
				'animation-name': 'bounce',
				'animation-duration': '0.5s',
				'animation-iteration-count': '10',
				'animation-delay': '0.7s',
				'animation-fill-mode': 'forwards',
				'animation-timing-function': 'ease-in-out'
			});
		});
	});     
});