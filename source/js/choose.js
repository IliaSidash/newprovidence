$(function(){
  var btn = $('.choose-btns .choose-btns__item');
  var toggleRight = false;
  var plan = $('.plan-list__item');

  btn.on('click', function(){
    if (!$(this).hasClass('choose-btns__item_active')){
      btn.removeClass('choose-btns__item_active');
      $('.plan-list__item').removeClass('plan-list__item_active');
      $(this).addClass('choose-btns__item_active');
      if(!toggleRight){
        $('.toggle').addClass('toggle_right');
        $('.plan-list__item:nth-child(2)').addClass('plan-list__item_active');
        toggleRight = true;
      } else{
        $('.toggle').removeClass('toggle_right');
        $('.plan-list__item:nth-child(1)').addClass('plan-list__item_active');
        toggleRight = false;
      }
    } else{
      return false;
    }
    })
})
