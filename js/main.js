$(function () {
	$('.slider').slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
	});
});

$(function() {
	$('.additional__menu_slider_container').slick({
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				}
			},
		]
	});
});

$(function () {
	$('.slider__bulit').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(function () {
	$('.offers__sale-slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});


// Test jQuery
$(".footer__logo").dblclick(function(){
	console.log("Чего ты ждешь от этого клика?")
});

