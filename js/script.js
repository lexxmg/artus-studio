
'use strict';

$(document).ready(function() {
  const btnMenu = $('.js-burger'),
        nav = $('.header-nav'),
        burgerItem = $('.burger__item'),
        img = $('.header-parallax__img'),
        titleHeader = $('.header-parallax__title-container-inner'),
        menu = $('.header-nav'),
        header = $('.header'),
        topBar = $('.header__top-bar'),
        body = $('body, html');

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

    if ( scroll < ( header.height() - topBar.height() ) ) {
      img.css({'marginTop': -(scroll * 0.4) + 'px'});

      const s = scroll * 0.6;
      titleHeader.css( 'transform', `translateY(${s}px)` );
    }
  });

  $('.js-nav').on('click', function(event){
    event.preventDefault();

    let heightTopBar = topBar.height();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;

    console.log(href);
    console.log($(href));

    console.log(offset);

    body.animate({scrollTop: offset - topBar.height()}, 700);
    //$('.header__top').animate({top: offset});
  });

  // $('.slick').slick({
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // });

  $('.slick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 414,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
