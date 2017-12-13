var featuresItems = $('.features__item');
var marginTop = $(window).height() / 1.5;

window.onscroll= function(){
  var wScroll = $(document).scrollTop();
  if ($('.features__item').offset().top - wScroll < marginTop  ){
    $('.features__item').eq(0).addClass('animated fadeInLeftBig');
    $('.features__item').eq(1).addClass('animated fadeInRightBig');

  }
  if ($('.protect__content').offset().top - wScroll < marginTop  ){
    $('.protect__content').addClass('animated fadeInRightBig');
  }
  if ($('.title.map-feature__title').offset().top - wScroll < marginTop  ){
    $('.title.map-feature__title').parent().addClass('animated fadeInLeftBig');
  }

};
