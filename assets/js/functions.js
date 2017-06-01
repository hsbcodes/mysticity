$(function(){
	smoothScroll(1000);
	bandFull();
	bioLoad();
	musicFull();
	albumLoad();
	galleryStuff();
});

//mobile nav
$(function(){
	$('#toggle').click(function(){
		$(this).toggleClass("on");
		if($(this).next().css('display')=='block'){
			$(this).next().slideUp();
		}else{
			$(this).next().slideDown();
		}
    return false;
	});
	$('.mobile-nav ul li').click(function(){
		$('#toggle').removeClass("on");
		$(this).parent().slideUp();
	});
});

//making the nav items active
$(document).ready(function() {
				$("#nav .nav-item a").click(function(){
						$("#nav .nav-item a").removeClass("active");
						$(this).addClass("active");

				});
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
	$('.band-thumb-unit').click(function(){
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
	$('.band-thumb-unit').click(function() {
		var $this = $(this),
			  newFile = $this.data('file'),
		    spinner = '<div class="loader">Loading...</div>',
			  newHTML = 'assets/bio/'+ newFile +'.html';
			  $('.bio-load').html(spinner).load(newHTML);
	});
}

//open album page
function musicFull(){
	$('.music-unit').click(function(){
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
	$('.music-unit').click(function() {
		var $this = $(this),
			  newFile = $this.data('file'),
		    spinner = '<div class="loader">Loading...</div>',
			  newAlbumHTML = 'assets/albums/'+ newFile +'.html';
			  $('.album-load').html(spinner).load(newAlbumHTML);
	});
}

//load dinamic gallery images
function galleryStuff() {
	$('.gallery-unit').first().addClass('active-gal');
	$('.thumb-unit').click(function(){
		var $this = $(this),
				$siblings = $this.parent().children(),
				position = $siblings.index($this);
		$('.gallery-unit').removeClass('active-gal').eq(position).addClass('active-gal');
	});


	$('.icon-next, .icon-prev').click(function(){

		var $this = $(this),
		curActiveGal = $('.slide').find('.active-gal'),
		position = $('.slide').children().index(curActiveGal),
		galleryNum = $('.gallery-unit').length;

		if($this.hasClass('icon-next')) {
			if(position < galleryNum -1) {
				$('.active-gal').removeClass('active-gal').next().addClass('active-gal');
			} else {
				$('.gallery-unit').removeClass('active-gal').first().addClass('active-gal');
			}
		}else {
			if (position === 0) {
				$('.gallery-unit').removeClass('active-gal').last().addClass('active-gal');
			}else {
			$('.active-gal').removeClass('active-gal').prev().addClass('active-gal');
			}
		}

	});


}
