$(document).ready(function () {
	$('.header-menu__btn').on('click', function (e) {
		e.preventDefault;
		$(this).toggleClass('.header-menu__active');
	});
});