$(document).ready(function(){

//фиксированный хедер и расположение кнопки корзины
$('.cart-link').css('opacity', '1');
var headerSticky = function(){
  if($(window).outerWidth() > 767) {
    $('#cart-link').removeClass('fixed');
    var headerTopHeight = $('#header-top').outerHeight();
    var headerBottomHeight = $('#header-bottom').outerHeight();
    if($(window).scrollTop() > headerTopHeight) {
      $('.header-bottom').addClass('sticky');
      $('body').css('padding-top', headerBottomHeight + 'px');
      $('#cart-link').appendTo('#header-bottom-wrapper');
    } else {
      $('.header-bottom').removeClass('sticky');
      $('body').css('padding-top', '0');
      $('#cart-link').insertBefore('#auth-btn');
    }
  } else {
    $('#cart-link').appendTo('body').addClass('fixed');
    $('body').css('padding-top', '0');
  };
};
headerSticky();
$(window).scroll(headerSticky).resize(headerSticky);

// моб навигация (<=767px)
$('.btn-menu').click(function(){
  $('#overlay').fadeIn();
  $('.tooltip').slideUp();
  //$('#overlay').css('z-index', '7');
  $('#mob-cont').addClass('active');
});
$('#mob-nav a, #overlay, #close').click(function(){
  $('#overlay').fadeOut();
  //$('#overlay').css('z-index', '6');
  $('#mob-cont').removeClass('active');
});
$('#mob-cont .call-btn, #mob-cont .map-call').click(function(){
   $('#mob-cont').removeClass('active');
});

// смена изображения при выборе диаметра
$('.size-switch input[type="radio"]').change(function(){
  var thisVal = $(this).val();
  var thisItemImg = $(this).parents('.item').find('.product-img');
  thisItemImg.attr('src', 'img/pizza/' + thisVal +'.jpg');
});

// модальные окна
$('.call-btn').click(function(){
  $('#overlay').fadeIn();
  $('#callback-modal').slideDown();
});
$('#auth-btn').click(function(){
  $('#overlay').fadeIn();
  $('#authorization-modal').slideDown();
});
$('#to-registration').click(function(){
  $('#authorization-modal').slideUp();
  $('#registration-modal').delay(400).slideDown();
});
$('#to-authorization').click(function(){
  $('#registration-modal').slideUp();
  $('#authorization-modal').delay(400).slideDown();
});
$('#to-recover').click(function(){
  $('#authorization-modal').slideUp();
  $('#recover-modal').delay(400).slideDown();
});
$('.map-call').click(function(){
  $('#map-modal').slideDown();
  $('#overlay').fadeIn();
});
$('#map-close').click(function(){
  $('#map-modal').slideUp();
  $('#overlay').fadeOut();
});

// тултипы (добавить/удалить ингридиенты; информация о товаре)
$('.ingredients-btn').click(function(){
  $(this).parents('.ingredients-control').find('.ingredients-tooltip').slideToggle();
});
$('.plus').click(function(){
  var thisQuantity = $(this).parents('.ingr-counter-cont').find('.ingr-quant');
  var thisQuantityNum = parseInt(thisQuantity.html());
  thisQuantity.html(thisQuantityNum + 1);
  $(this).parents('.ingr-counter-cont').find('.minus, .ingr-quant').css('display', 'inline-block');
});
$('.minus').click(function(){
  var thisQuantity = $(this).parents('.ingr-counter-cont').find('.ingr-quant');
  var thisQuantityNum = parseInt(thisQuantity.html());
  if(thisQuantityNum > 0) {
    thisQuantity.html(thisQuantityNum - 1);
  };
  if(thisQuantityNum == 1) {
      $(this).parents('.ingr-counter-cont').find('.minus, .ingr-quant').css('display', 'none');
    }
});
$('.info-btn').click(function(){
  $(this).parents('.product-heading').find('.info-tooltip').slideToggle();
  $(this).toggleClass('active');
});
$('.tooltip-close').click(function(){
  $(this).parents('.tooltip').slideUp();
  $(this).parents('.product-heading').find('.info-btn').removeClass('active');
});
$('#header-bottom').click(function(){
  $('.tooltip').slideUp();
  $('#overlay').fadeOut();
});

// фильтры каталога
$('#choose-btn').click(function(){
  $('#components-dropdown').slideToggle();
});
$('#components-close').click(function(){
  $('#components-dropdown').slideUp();
});
$('#components-list input[type="checkbox"]').change(function(){
  var thisValue = $(this).val();
  if($(this).prop('checked')) {
    var thisHtml = $(this).siblings('label').html();
    $('#chosen-list').append('<li class="chosen-item" data-component="' + thisValue + '"><span class="chosen-name">' + thisHtml + '</span><span class="cancel-chosen">X</span></li>');
  } else {
    $('#chosen-list li[data-component="' + thisValue + '"]').remove();
  }
  $('.cancel-chosen').click(function(){
    var thisData = $(this).parents('.chosen-item').attr('data-component');
    $('#components-list input[type="checkbox"][value="' + thisData + '"]').prop('checked', false);
    $(this).parents('.chosen-item').remove();
  });
});
$('#filter-reset').click(function(){
  $('#components-list input[type="checkbox"]').prop('checked', false);
  $('.chosen-item').remove();
});
$('#filter-apply').click(function(){
  $('#components-dropdown').slideUp();
});

//decoration of current page link in navigation
$('a').each(function(){
  var location = window.location.href;
  var link = this.href
  if(location == link) {
    $(this).addClass('active');
  }
});

// overlay click events
$('#overlay').click(function(){
  $('.modal').slideUp();
  $(this).fadeOut();
});


// masked phone input https://github.com/digitalBush/jquery.maskedinput
$('input[type="tel"]').mask("+7 (999) 999-99-99");
$('#date-input').mask("99.99.9999");


  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
