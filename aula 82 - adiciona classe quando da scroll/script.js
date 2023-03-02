$(function() {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$('.obj').addClass('change');
		}

		else {
			$('.obj').removeClass('change');
		}
	});
})

// scroll the page to see effect