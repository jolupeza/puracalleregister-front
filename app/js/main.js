"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  let $window = $(window);

  $(function () {
    /*$window.on('scroll', function () {
    });*/

    /*$window.on('resize', () => {
    });*/

    /*$('.element-animate').hover(
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();

        parent.addClass('animated ' + animation);
      },
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();

        parent.removeClass('animated ' + animation);
      }
    );*/

    // $('#carousel-team').on('slide.bs.carousel', function (e) {
    //   loadMultipleCarousel(3, e);
    // });

    $('.Form__control').on('focus', function(e) {
      focusInput(e, true);
    });

    $('.Form__control').on('focusout', function(e) {
      focusInput(e, false);
    });

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  let focusInput = (e, status) => {
    let $this = $(e.target),
        label = $this.prev();

    if (status) {
      label.addClass('active');
    } else {
      label.removeClass('active');
    }
  }
})(jQuery);

