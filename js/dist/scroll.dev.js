"use strict";

(function ($) {
  $.fn.pageCrossFade = function (options) {
    var settings = $.extend({
      duration: 400,
      easing: 'swing',
      links: 'internal'
    }, options);

    var fadePage = function fadePage($link) {
      $('body').fadeOut(settings.duration, settings.easing, function () {
        window.location.href = $link;
      });
    };

    if (settings.links === 'all') {
      $('a').on('click', function (e) {
        e.preventDefault();
        var $link = $(this).attr('href');
        fadePage($link);
      });
    } else if (settings.links === 'internal') {
      $('a').on('click', function (e) {
        var a = new RegExp('/' + window.location.host + '/');

        if (a.test(this.href)) {
          console.log("external link");
          e.preventDefault();
          var $link = $(this).attr('href');
          fadePage($link);
        }
      });
    } else {
      $('a' + settings.links).on('click', function (e) {
        e.preventDefault();
        var $link = $(this).attr('href');
        fadePage($link);
      });
    }
  };
})(jQuery);

var spaceHolder = document.querySelector('.space-holder');
var horizontal = document.querySelector('.horizontal');
var title = document.querySelector('.title--project');
spaceHolder.style.height = "".concat(calcDynamicHeight(horizontal), "px");

function calcDynamicHeight(ref) {
  var vw = window.innerWidth;
  var vh = window.innerHeight;
  var objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150;
}

window.addEventListener('scroll', function () {
  var sticky = document.querySelector('.sticky'); // title.style.position = `fixed`;

  horizontal.style.transform = "translateX(-".concat(sticky.offsetTop, "px)");
});
window.addEventListener('resize', function () {
  spaceHolder.style.height = "".concat(calcDynamicHeight(horizontal), "px");
});
$(window).on('scroll', function () {
  $(".footer").each(function () {
    if (isScrolledIntoView($(this))) {
      title.classList.add('fixed');
    } else {
      title.classList.remove('fixed');
    }
  });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top; // elemTop = elemTop - 50px;

  var elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}