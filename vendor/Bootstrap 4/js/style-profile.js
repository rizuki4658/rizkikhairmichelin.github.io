	$(document).ready(function(){
		$('.bg-image').show("slow",function(){
			$('.bg-image').css({
				'animation-name': 'blurry',
				'animation-duration': '0.5s',
				'animation-iteration-count': '1',
				'animation-delay': '0.6s',
				'animation-fill-mode': 'forwards',
				'animation-timing-function': 'ease-in-out'
			});
		});
		$('.container').delay(1100).fadeIn(500);
		$('button').eq(0).click(function(){
			$('.container').eq(0).hide("fast",function(){
				$('.container-fluid').eq(0).show("fast");
			});
		});

		$('button').eq(1).click(function(){
			$('.container').eq(0).hide("fast",function(){
				$('.container-fluid').eq(1).show("fast");
			});
		});

		$('button').eq(2).click(function(){
			$('.container').eq(0).hide("fast",function(){
				$('.container-fluid').eq(2).show("fast");
			});
		});

		$('button').eq(3).click(function(){
			$('.container-fluid').eq(0).hide("fast",function(){
				$('.container').eq(0).show("fast");
			});
		});

		$('button').eq(4).click(function(){
			$('.container-fluid').eq(1).hide("fast",function(){
				$('.container').eq(0).show("fast");
			});
		});

		$('button').eq(5).click(function(){
			$('.container-fluid').eq(2).hide("fast",function(){
				$('.container').eq(0).show("fast");
			});
		});
	});