// pop up VIDEO modal

$(document).ready(function () {
	$('.call-to-action').click(function () {
		openModal();
		$('.introVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	});

  $('.thumb-unit').click(function () {
		openGallery();
	});

	$('.close-icon, nav').click(function () {
		closeModal();
    closeGallery();
		$('.introVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	});



	$(window).keypress(function (event) {
		if (event.which == 27) {
			closeModal();
      closeGallery();
		}
	});

	$('.modal-container').click(function (event) {
		if (this == event.target) {
			closeModal();
		}
	});
  $('.gallery-container').click(function (event) {
		if (this == event.target) {
      closeGallery();
		}
	});
});

function openModal() {
	$('html').addClass('modal-open');
}

function closeModal() {
	$('html').removeClass('modal-open');
}


function openGallery() {
	$('html').addClass('gallery-open');
}

function closeGallery() {
	$('html').removeClass('gallery-open');
}
