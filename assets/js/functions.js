
$(function(){
	smoothScroll(1000);
	bandFull();
	bioLoad();
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
