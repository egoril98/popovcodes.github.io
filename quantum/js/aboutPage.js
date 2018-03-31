$(document).ready(function(){

  // mobile navigation
  $('#mob-nav-btn, .mob-nav-cont a, .overlay, #mob-nav-close' ).click(function(){
    $('.mob-nav-cont').toggleClass('active');
    $('.overlay').toggleClass('hidden')
  });

  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-about-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 890,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
          }
        },
        {
          breakpoint: 375,
          settings: {
          }
      }
    ]
  });

  $('#about-slider-prev').click(function(){
    $('#js-about-slider').slick('slickPrev');
  });

  $('#about-slider-next').click(function(){
    $('#js-about-slider').slick('slickNext');
  });
 
  //slick.js slider   http://kenwheeler.github.io/slick/
  $('#js-clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          autoplay: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
    ]
  });

  $('#clients-arow-prev').click(function(){
    $('#js-clients-slider').slick('slickPrev');
  });

  $('#clients-arow-next').click(function(){
    $('#js-clients-slider').slick('slickNext');
  });


  // show/hide searh input
  $('#searchBtn-trigger').click(function(){
    $('#search-form').addClass('active');
  });

  $('#search-close').click(function(){
    $('#search-form').removeClass('active');
  });


  if(document.documentElement.clientWidth > 1200) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    new WOW().init();
  };
});

