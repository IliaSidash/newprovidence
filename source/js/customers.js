$(function(){
	$('.customers-slider-top').slick({
		centerPadding: '0',
		slidesToShow: 1,
		slideToScroll: 1,
		centerMode: true,
		infinyte: false,
  	asNavFor: '.customers-slider-bottom',
  	centerMode: true,
  	variableWidth: true,
		focusOnSelect: true,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
			{
	      breakpoint: 768,
	      settings: {
					variableWidth: false
	      }
	    }
  ]

	});
	$('.customers-slider-bottom').slick({
		centerPadding: '0px',
		slidesToShow: 1,
		infinyte: false,
  	asNavFor: '.customers-slider-top',
  	centerMode: true,
		arrows: false
	});
});
