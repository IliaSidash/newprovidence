$(function(){
	$('.customers-slider-top').slick({
		centerPadding: '60',
		slidesToShow: 1,
		// autoplay: true,
  //   	autoplaySpeed: 2000,
    	asNavFor: '.customers-slider-bottom',
    	centerMode: true,
    	// variableWidth: true,
		
	});
	$('.customers-slider-bottom').slick({
		slidesToShow: 1,
		// autoplay: true,
  //   	autoplaySpeed: 2000,
    	asNavFor: '.customers-slider-top',
    	centerMode: true,
    	focusOnSelect: true,
	});
});