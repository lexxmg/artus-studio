
'use strict';

$(document).ready(function() {
  const btnMenu = $('.js-burger'),
        burgerItem = $('.burger__item'),
        menu = $('.header-nav'),
        body = $('body');

  btnMenu.on('click', function(){
    if(btnMenu.attr('aria-expanded') === 'false') {
      menu.slideDown(function(){
        btnMenu.attr('aria-expanded', 'true');
        burgerItem.addClass('burger--animate');
      });
    } else {
      menu.slideUp(function(){
        btnMenu.attr('aria-expanded', 'false');
        burgerItem.removeClass('burger--animate');
      });
    }
  });

  body.on('click', () => {
    if (btnMenu.attr('aria-expanded') === 'true') {
      menu.slideUp(function(){
        btnMenu.attr('aria-expanded', 'false');
        burgerItem.removeClass('burger--animate');
      });
    }
  });
});
