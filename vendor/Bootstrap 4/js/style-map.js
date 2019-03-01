	$(document).ready(function(){
		$('.bg-image').fadeIn(500);
		$('.fake-loading').delay(800).fadeIn(800);
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
		$('.bg-image').delay(6300).css({
			'animation-name': 'blurry',
			'animation-duration': '0.5s',
			'animation-iteration-count': '1',
			'animation-delay': '6.3s',
			'animation-fill-mode': 'forwards',
			'animation-timing-function': 'ease-in-out'
		});
		$('.content-center').delay(6400).show("slow",function(){
			$('.img-logo').delay(500).fadeIn(800);
			$('.img-map').delay(800).show(1000);
			$('.map-logo').delay(1000).fadeIn(800);
		});
	});