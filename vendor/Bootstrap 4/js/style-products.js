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
		$('.img-banner').delay(6300).fadeIn("slow");
		$('.product').delay(6300).show("slow", function(){
			$('.bg-image').css({
				'animation-name': 'blurry',
				'animation-duration': '0.5s',
				'animation-iteration-count': '1',
				'animation-delay': '0.5s',
				'animation-fill-mode': 'forwards',
				'animation-timing-function': 'ease-in-out'
			});
			$('.this-product').first().show("slow", function showNext() {
    			$(this).next('.this-product').show("slow", showNext);
  			});
		});
		$('.text-product').click(function(){
			$('.product').fadeOut(500);
		});
		$('.text-product').eq(0).click(function(){
			var src_image 	= $('.this-image').eq(0).attr("src");
			var name 		= $(this).text();
			
			$('#exampleModal3').modal({backdrop: 'static', keyboard: false});
			$('#product_img').attr("src", src_image);
  			$('#product_name').text(name);	
		});
		$('.text-product').eq(1).click(function(){
			var src_image 	= $('.this-image').eq(1).attr("src");
			var name 		= $(this).text();
			
			$('#product_img').attr("src", src_image);
  			$('#product_name').text(name);	
		});
		$('.text-product').eq(2).click(function(){
			var src_image 	= $('.this-image').eq(2).attr("src");
			var name 		= $(this).text();
			
			$('#product_img').attr("src", src_image);
  			$('#product_name').text(name);	
		});
		$('.text-product').eq(3).click(function(){
			var src_image 	= $('.this-image').eq(3).attr("src");
			var name 		= $(this).text();
			
			$('#product_img').attr("src", src_image);
  			$('#product_name').text(name);	
		});
		$('.text-product').eq(4).click(function(){
			var src_image 	= $('.this-image').eq(4).attr("src");
			var name 		= $(this).text();
			
			$('#product_img').attr("src", src_image);
  			$('#product_name').text(name);	
		});
		$("#exampleModal3").on('shown.bs.modal', function(){
    		$('#exampleModal3').modal({backdrop: 'static', keyboard: false});
    		$(".progress-bar").eq(0).animate({"width": 90 + "%"}, {duration: 600, easing: 'linear'});
			$(".progress-bar").eq(1).animate({"width": 25 + "%"}, {duration: 700, easing: 'linear'});
			$(".progress-bar").eq(2).animate({"width": 78 + "%"}, {duration: 800, easing: 'linear'});
    		$(".progress-bar").eq(0).text("90%");
			$(".progress-bar").eq(1).text("25%");
			$(".progress-bar").eq(2).text("78%");
  		});
		$('.close').click(function(){
			$('.product').delay(500).fadeIn(600);
			$(".progress-bar").eq(0).css("width", "0%");
			$(".progress-bar").eq(1).css("width", "0%");
			$(".progress-bar").eq(2).css("width", "0%");
    		$(".progress-bar").eq(0).text("0%");
			$(".progress-bar").eq(1).text("0%");
			$(".progress-bar").eq(2).text("0%");
		});
	});