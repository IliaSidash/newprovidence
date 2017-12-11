$(function(){
  var btn = $('.choose-btns .choose-btns__item');
  var toggleRight = false;
  
  btn.on('click', function(){
    $(this).removeClass('choose-btns__item_active');
    $('.choose-btns .choose-btns__item').not(this).addClass('choose-btns__item_active');
  })
})
