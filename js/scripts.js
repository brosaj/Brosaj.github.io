
$(document).ready(function() {

	"use strict";

	FirstLoad();
	HeroSection();
	$(".page-overlay .animate-box-bottom").css('background-color', function () {
		return $("#page-content").data('textcolor')
	});

});

$(window).on("load", function() {
	LazyLoad();
});



	function FirstLoad() {

		var options = {
		  "animate": true,
		  "patternWidth": 100,
		  "patternHeight": 100,
		  "grainOpacity": 0.04,
		  "grainDensity": 1,
		  "grainWidth": 1,
		  "grainHeight": 1
		}
		if( $('.grain-page #main').length > 0 ){
			grained(".grain-page #main", options);
			grained(".grain-page #grain-hero", options);
		}
	}

	function HeroSection() {

		if( $('#hero').length > 0 ){

		var HeroImage = document.getElementById('hero-styles');
		var windowScrolled;


		window.addEventListener('scroll', function windowScroll() {
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ($('#hero-styles').hasClass("scale-onscroll")) {
				HeroImage.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
			}
			if ($('#hero-styles').hasClass("parallax-onscroll")) {
				HeroImage.style.transform = 'translate3d(0, ' + windowScrolled / -2.5 + 'px, 0)';
			}
			if ($('#hero-styles').hasClass("opacity-onscroll")) {
				HeroImage.style.opacity =  (1 - (windowScrolled/20) / 20);
			}
		});

		}

		$('.hero-title').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		})

	}



	function LazyLoad() {

		setTimeout(function(){
			$('body').removeClass('hidden');
		} , 100 );

		if( $('#hero-bg-image').length > 0 ){

			$('#hero-bg-image').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout(function(){
						$('#hero-bg-image').addClass('animate');
					} , 200 );
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
							setTimeout(function(){
								$(".page-overlay .animate-box-bottom").css('background-color', function () {
									return $("#page-content").data('textcolor')
								});
							} , 1000 );
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});

		} else {

		}

	}


	function HeroColor() {
		$('#hero').waitForImages({
			finished: function() {
		if( $('#hero-height').length > 0 ){


			if ($('#hero-bg-image').hasClass("light-content")) {
				$('#hero-styles').addClass('light-content').addClass('animate');

			}
			setTimeout(function(){
				$('#hero-caption').addClass('animate');
				$('#hero-height').removeClass('hidden');
			} , 250 );

		}
		},
			waitForAll: true
		});



	}
