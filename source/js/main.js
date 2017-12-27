var featuresItems = $('.features__item');
var marginTop = $(window).height() / 1.5;

var parallax = (function(){
  var elem = $('.offer__img');
  return {
    move: function(wScroll, parAmount){
      var step = wScroll / parAmount + '%';
        elem.css({
          'transform': 'translate(-50%, 50%) translate3d(0, -' + step + ', 0)'
        })
    }
  }
})();

$(window).on('scroll', function(){
  var wScroll = $(document).scrollTop();
  if ($('.features__item').offset().top - wScroll < marginTop  ){
    $('.features__item').eq(0).addClass('animated fadeInLeftBig');
    $('.features__item').eq(1).addClass('animated fadeInRightBig');
  };

  if ($('.protect__content').offset().top - wScroll < marginTop  ){
    $('.protect__content').addClass('animated fadeInRightBig');
  }
  if ($('.title.map-feature__title').offset().top - wScroll < marginTop  ){
    $('.title.map-feature__title').parent().addClass('animated fadeInLeftBig');
  };

  parallax.move(wScroll, 60);
});
