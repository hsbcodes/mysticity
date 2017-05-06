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
