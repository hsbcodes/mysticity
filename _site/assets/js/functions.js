

// pop up modal

$(document).ready(function () {
	$('.call-to-action').click(function () {
		openModal();
	});

	$('.close-icon').click(function () {
		closeModal();
	});

	$(window).keypress(function (event) {
		if (event.which == 27) {
			closeModal();
		}
	});

	$('.modal-container').click(function (event) {
		if (this == event.target) {
			closeModal();
		}
	});
});

function openModal() {
	$('html').addClass('modal-open');
}

function closeModal() {
	$('html').removeClass('modal-open');

}





//smooth scrolling
$(function(){
	smoothScroll(1000);
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top

			}, duration);
		}
	});
}
