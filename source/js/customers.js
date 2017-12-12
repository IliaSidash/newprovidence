$(function(){
	$('.customers-slider-top').slick({
		centerPadding: '60',
		slidesToShow: 1,
		slideToScroll: 1,
		centerMode: true,
		infinyte: false,
  	asNavFor: '.customers-slider-bottom',
  	centerMode: true,
  	variableWidth: true,
		focusOnSelect: true

	});
	$('.customers-slider-bottom').slick({
		slidesToShow: 1,
		infinyte: false,
  	asNavFor: '.customers-slider-top',
  	centerMode: true,
		arrows: false
	});
});
