
'use strict';

$(document).ready(function() {
  const btnMenu = $('.js-burger'),
        nav = $('.header-nav'),
        burgerItem = $('.burger__item'),
        img = $('.header-parallax__img'),
        menu = $('.header-nav'),
        header = $('.header'),
        body = $('body');

  btnMenu.on('click', function() {
    if(btnMenu.attr('aria-expanded') === 'false') {
      menu.slideDown(function() {
        btnMenu.attr('aria-expanded', 'true');
        burgerItem.addClass('burger--animate');
      });
    } else {
      menu.slideUp(function() {
        btnMenu.attr('aria-expanded', 'false');
        burgerItem.removeClass('burger--animate');
        nav.removeAttr('style');
      });
    }
  });

  body.on('click', () => {
    if (btnMenu.attr('aria-expanded') === 'true') {
      menu.slideUp(function() {
        btnMenu.attr('aria-expanded', 'false');
        burgerItem.removeClass('burger--animate');
        nav.removeAttr('style');
      });
    }
  });

  $(window).on('scroll', function(event) {
    const scroll = $(this).scrollTop();

    console.log(scroll);
    console.log( header.height() );

    if ( scroll < header.height() ) {
      img.css({'marginTop': -(scroll * 0.4) + 'px'});
    }
  });
});
