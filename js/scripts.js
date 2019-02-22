
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


/*--------------------------------------------------
Function Firs tLoad
---------------------------------------------------*/

	function FirstLoad() {

		// $("html,body").animate({scrollTop: 0}, 1);

		// $('.item-image').each(function() {
		// 	var image = $(this).data('src');
    //
		// 	$(this).css({
		// 		'background-image': 'url(' + image + ')'
		// 	});
		// });
    //
		// $('.project-next').on('click', function() {
		// 	$('#main').addClass('hidden');
		// 	$('header').addClass('menu-open');
		// });
    //
		// $('a.ajax-link').on('click', function() {
		// 	$(".page-overlay").addClass("from-bottom");
		// 	$('#main').addClass('hidden');
    //
		// });

		// $('.nav-title').on('mouseenter', function() {
		// 	$(".nav-project-title").addClass('hover');
		// }).on('mouseleave', function() {
		// 	$(".nav-project-title").removeClass('hover');
		// });
    //
		// $('#open-filters, .close-page-action, #open-search').on('click', function() {
		// 	$('.page-action-overlay').toggleClass('active');
		// });
    //
		// $("#main, #image-border-left, #image-border-right, .img-container, #menu-overlay").css('background', function () {
		// 	return $("#page-content").data('bgcolor')
		// });
    //
		// $("#main-content, footer, #menu-overlay").css('background', function () {
		// 	return $("#page-content").data('bgcontent')
		// });
    //
		// $("h1, h2, h3, h4, h5, h6, .socials-text li a, #open-filters, #open-share, #backtoworks, [data-tooltip], a.link, .color-content a.link, .color-content .hero-title").css('color', function () {
		// 	return $("#page-content").data('textcolor')
		// });
    //
		// $(".color-content #menu-burger span, nav > ul > li span, #filters li a span").css('background-color', function () {
		// 	return $("#page-content").data('textcolor')
		// });
    //
		// setTimeout(function(){
		// 	$("#fp-nav ul li a span").css('background-color', function () {
		// 		return $("#page-content").data('textcolor')
		// 	});
		// } , 100 );
		// $(".color-content .view-project").css('border-color', function () {
		// 	return $("#page-content").data('textcolor')
		// });
    //
    //
    //


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
		// if( $('.grain-page #showcase-slider').length > 0 ){
		// 	grained("#sig1", options);
		// 	grained("#sig2", options);
		// 	grained("#sig3", options);
		// 	grained("#sig4", options);
		// 	grained("#sig5", options);
		// 	grained("#sig6", options);
		// }


		// setTimeout( function(){
		// $('#project-nav').on('mouseenter', function() {
		// 		$("#project-nav").addClass("from-bottom");
		// }).on('mouseleave', function() {
		// 	$("#project-nav").addClass("from-bottom-end");
		// 	setTimeout( function(){
		// 		$("#project-nav").removeClass("from-bottom");
		// 		$("#project-nav").removeClass("from-bottom-end");
		// 	} , 100 );
		// });
		// } , 500 );
	}// End First Load

/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/

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

	}//End Hero Section



/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

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

			// setTimeout( function(){
			// 	HeroColor();
			// 	$(".page-overlay").addClass("from-bottom-end");
			// 	setTimeout( function(){
			// 		$(".page-overlay").removeClass("from-bottom");
			// 		$(".page-overlay").removeClass("from-bottom-end");
			// 		setTimeout(function(){
			// 			$(".page-overlay .animate-box-bottom").css('background-color', function () {
			// 				return $("#page-content").data('textcolor')
			// 			});
			// 		} , 1000 );
			// 	} , 800 );
			// 	$("#showcase-slider").removeClass("delay");
			// 	setTimeout(function(){
			// 		$("#showcase-slider").removeClass("first-load");
			// 	} , 1200 );
			// } , 100 );
		}

	}// End Lazy Load



/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/



/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/

	// function HideShowHeader() {
  //
	// 		var didScroll;
	// 		var lastScrollTop = 0;
	// 		var delta = 50;
	// 		var navbarHeight = 250;
	// 		var navbarHideAfter = navbarHeight
  //
	// 		$(window).scroll(function(event){
	// 			didScroll = true;
	// 		});
  //
	// 		if( $('.scroll-hide').length > 0 ){
  //
	// 			setInterval(function() {
	// 				if (didScroll) {
	// 					hasScrolled();
	// 					didScroll = false;
	// 				}
	// 			}, 100);
  //
	// 		}
  //
	// 		return false;
  //
	// 		function hasScrolled() {
	// 			var st = $(this).scrollTop();
  //
	// 			if(Math.abs(lastScrollTop - st) <= delta)
	// 				return;
  //
	// 			if (st > lastScrollTop && st > navbarHideAfter){
	// 				if( $('.scroll-hide').length > 0 ){
	// 				$('header').addClass('nav-hide');
	// 				}
	// 			} else {
	// 				if( $('.scroll-hide').length > 0 ){
	// 				if(st + $(window).height() < $(document).height()) {
	// 					$('header').removeClass('nav-hide');
	// 				}
	// 				}
	// 			}
  //
	// 			lastScrollTop = st;
	// 		}
  //
  //
	// }//End Hide Show Header




/*--------------------------------------------------
Function Header Color
---------------------------------------------------*/


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



	}// End Header Color
