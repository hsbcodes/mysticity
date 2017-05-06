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




$(function(){
	smoothScroll(1000);
	bandFull();
	bioLoad();
	musicFull();
	albumLoad();
});

//smooth scrolling
function smoothScroll(duration) {
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

//open bio page
function bandFull(){
	$('.band-unit').click(function(){
		$('.band-full').css('left','-100%');
		$('.bio-container').show();
	});
	$('.icon-back').click(function(){
		$('.band-full').css('left','0%');
		$('.bio-container').hide(800);
	});
}

//load dinamic bio page
function bioLoad() {
	$.ajaxSetup({ cache: false });
	$('.band-unit').click(function() {
		var $this = $(this),
			  newFile = $this.data('file'),
		    spinner = '<div class="loader">Loading...</div>',
			  newHTML = '../assets/bio/'+ newFile +'.html';
			  $('.bio-load').html(spinner).load(newHTML);
	});
}

//open album page
function musicFull(){
	$('.details').click(function(){
		$('.music-full').css('left','-100%');
		$('.album-container').show();
	});
	$('.icon-back').click(function(){
		$('.music-full').css('left','0%');
		$('.album-container').hide(400);
	});
}

//load dinamic album page
function albumLoad() {
	$.ajaxSetup({ cache: false });
	$('.details').click(function() {
		var $this = $(this),
			  newFile = $this.data('file'),
		    spinner = '<div class="loader">Loading...</div>',
			  newAlbumHTML = '../assets/albums/'+ newFile +'.html';
			  $('.album-load').html(spinner).load(newAlbumHTML);
	});
}
